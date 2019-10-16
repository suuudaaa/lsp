
// ==UserScript==
// @name         视频vip解析
// @namespace    http://mxspvip.cn
// @version      1.2
// @description  支持，优酷、爱奇艺、腾讯、乐视等vip视频播放
// @author       pibigstar
// @match        http://www.iqiyi.com/v_*
// @match        http://www.mgtv.com/v/*
// @match        http://www.le.com/ptv/*
// @match        http://v.youku.com/v_show/*
// @match        http://film.sohu.com/album/*
// @match        http://tv.sohu.com/*
// @match        https://v.qq.com/x/cover/*
// @grant        GM_addStyle
// @require      https://cdn.bootcss.com/jquery/2.2.1/jquery.js
// ==/UserScript==

(function (){
  GM_addStyle('#floatDivBoxs{width:170px;background:#fff;position:fixed;top:180px;right:0;z-index:999;}')
  GM_addStyle('#floatDivBoxs a{color:#666;text-decoration:none;outline:none;}')
  GM_addStyle('#floatDivBoxs a:hover{color:#e8431f;}')
  GM_addStyle('#floatDivBoxs .floatDtt{width:100%;height:50px;line-height:50px; background:#f08326;color:#fff;font-size:20px;text-indent:22px;position:relative;}')
  GM_addStyle('#floatDivBoxs .floatDqq{padding:0 14px;}')
  GM_addStyle('#floatDivBoxs .floatDqq li{height:45px;line-height:45px;font-size:15px;border-bottom:1px solid #e3e3e3;}')
  GM_addStyle('#floatDivBoxs .floatDbg{width:100%;height:20px;box-shadow:-2px 0 3px rgba(0,0,0,0.25);}')
  GM_addStyle('.floatShadow{box-shadow:-2px 0 3px rgba(0,0,0,0.25);}')
  GM_addStyle('#rightArrow{width:50px;height:45px;position:fixed;top:180px;right:170px;z-index:999;}')
  GM_addStyle('#rightArrow a{background:#F08326;display:block;height:50px;}')
      GM_addStyle('#rightArrow a img{background:#F08326;display:block;height:50px;width:45px;}')
  
  var html = '<div id="rightArrow"><a href="javascript:;" title=""><img id="rightImg" src="http://pmyln8jkg.bkt.clouddn.com/youhou/right.png" /></a></div>'
    html += '<div id="floatDivBoxs">'
    html += '<div class="floatDtt">vip通道</div>'
    html += '<div class="floatShadow">'
    html += '<ul class="floatDqq">'
         html += '<li><a href="#" name="vip" url="http://www.wmxz.wang/video.php?url="> 无名小站</a></li>'
         html += '<li><a href="#" name="vip" url="https://cn.bjbanshan.cn/jiexi.php?url=">1号接口</a></li>'
         html += '<li><a href="#" name="vip" url="https://aikan-tv.com/tong.php?url=">2号接口</a></li>'
         html += '<li><a href="#" name="vip" url="http://api.51ckm.com/jx.php?url=">3号接口</a></li>'
         html += '<li><a href="#" name="vip" url="http://api.nepian.com/ckparse/?url=">4号接口</a></li>'
         html += '<li><a href="#" name="vip" url="http://jqaaa.com/jq3/?url=">5号接口</a></li>'
         html += '<li><a href="#" name="vip" url="http://2gty.com/apiurl/yun.php?url=">6号接口</a></li>'
         html += '<li><a href="#" name="vip" url="http://http://aikan-tv.com/?url=">7号接口</a></li>'
         html += '<li><a href="#" name="vip" url="http://y.mt2t.com/lines?url=">8号接口</a></li>'
     html += ' </ul>'
    html += '</div>'
    html += '</div>'
  // 添加到页面上
  $("body").append(html);
  //浮动代码
  var flag=1;
  $('#rightArrow').click(function(){
    if(flag==1){
      $("#floatDivBoxs").animate({right: '-175px'},300);
      $(this).animate({right: '-5px'},300);
      $(this).css('background-position','-50px 0');
          $("#rightImg").attr("src","http://pmyln8jkg.bkt.clouddn.com/youhou/left.png");
      flag=0;
    }else{
      $("#floatDivBoxs").animate({right: '0'},300);
      $(this).animate({right: '170px'},300);
      $(this).css('background-position','0px 0');
          $("#rightImg").attr("src","http://pmyln8jkg.bkt.clouddn.com/youhou/right.png");
      flag=1;
    }
  });
  
  })();
  // 监听每一个接口点击事件
  $("a[name='vip']").on("click",function(){
      //获取当前网址
      var url = window.location;
      var api = $(this).attr("url");
      window.open(api+url,'',
      'width=632,height=388,toolbar=no,location=no,status=no, menubar=no, resizable=yes, scrollbars=yes');
    return false;
  })


  (function() {
    'use strict';
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "下载");
    button.style.width = "60px";
    button.style.align = "center";
    button.style.marginLeft = "250px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "1px solid " + "#b46300";//52
    button.style.color = "white";
    var x = document.getElementById("maininfo");
    x.appendChild(button);
    // Your code here...
})();
