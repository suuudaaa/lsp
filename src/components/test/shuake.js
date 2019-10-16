var v,time,timeout,isCur = false;
var courseParams = getCourse();
var beginId = Number(courseParams.chapterId);
var courseId = courseParams.courseId;
var clazzid = courseParams.clazzid;
courseParams = null;
getCourse = null;
function play(){
    v = document.querySelector('iframe').contentDocument.querySelector('iframe')
    .contentDocument.querySelector('#video_html5_api');
    v.onpause = function(e){this.play()};
    v.oncanplay = function(){
    	if(!isCur && v.readyState == 4){
			time = parseInt($(v).parents('#reader').find('.vjs-duration-display').text());//当前视频的分钟数
			clearTimeout(timeout);
			timeout =  setTimeout(next,time*60000);
			//timeout =  setTimeout(next,20000);
			isCur = true;
    	}         
    }
    v.play()
}
function next(){
	beginId++;
  isCur = false;
	getTeacherAjax(courseId,clazzid,''+beginId);//传入课程所需参数
    setTimeout(play,2000)
    console.log(time,beginId)
	//setTimeout(next,20000)
}
play();
//处理querystring,返回课程对象
function getCourse(){
  var obj = {};
  var params = location.search.split('?')[1].split('&');
  for(var i in params){
    var parArr = params[i].split('=')
    var name = [0]
    obj[parArr[0]] = parArr[1]
  }
  return obj;
}
//