(function () {
  'use strict';
  var currentUrl = window.location.href;
  var reBDY=/pan.baidu.com\/s/i;
  var reYk = /youku/i;
  var reAqy = /iqiyi/i;
  var reLS = /le.com/i;
  var reTX = /v.qq/i;
  var reTD = /tudou/i;
  var reMG = /mgtv/i;
  var reSH = /sohu/i;
  var reAF = /acfun/i;
  var reBL = /bilibili/i;
  var reYJ = /1905/i;
  var rePP = /pptv/i;
  var reYYT = /yinyuetai/i;
  var reTaoBao = /taobao.com/i;
  var reTmall = /tmall/i;
  var reJd = /jd/i;
  var reWY = /163(.*)song/i;
  var reQQ = /y.QQ(.*)song/i;
  var reKG = /kugou(.*)song/i;
  var reKW = /kuwo(.*)yinyue/i;
  var reXM = /xiami/i;
  var reBD = /taihe.com/i;
  var reQT = /qingting/i;
  var reLZ = /lizhi/i;
  var reMiGu = /migu/i;
  var reXMLY = /ximalaya/i;
  var reSXB = /shangxueba/i;
  var t = $.now();
  if (reWY.test(currentUrl) || reQQ.test(currentUrl) || reKG.test(currentUrl) || reKW.test(currentUrl) || reXM.test(currentUrl) || reBD.test(currentUrl) || reQT.test(currentUrl) || reLZ.test(currentUrl) || reMiGu.test(currentUrl) || reXMLY.test(currentUrl)) {
      var menus=[{title:'\u7535\u5F71\u641C\u7D22',show:'\u7535\u5F71<br>\u641C\u7D22',type:'search'},{title:'\u97F3\u4E50\u4E0B\u8F7D',show:'\u97F3\u4E50<br>\u4E0B\u8F7D',type:'process'},{title:'\u7EDD\u4E16\u597D\u5238',show:'\u7EDD\u4E16<br>\u597D\u5238',type:'tb'},{title:'\u4EAC\u4E1C\u597D\u5238',show:'\u4EAC\u4E1C<br>\u597D\u5238',type:'jd'}];
      var f=function(){
      $('body').on('click', '[data-cat=process]', function () {
          InitCurrentUrl();
          if(reXMLY.test(currentUrl))
          {
              if(__INITIAL_STATE__.SoundDetailPage!=undefined)
              {
                  window.open('http://music.wandhi.com/?id='+__INITIAL_STATE__.SoundDetailPage.trackId+'&type=ximalaya');
              }else
              {
                  layer.closeAll();
                  var html='<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                  $.each(__INITIAL_STATE__.AlbumDetailTrackList.tracksInfo.tracks,function(index,item){html+='<li class="dOi2">'+
                  '<a href="http://music.wandhi.com/?id='+item.trackId+'&type=ximalaya" target="_blank">'+item.title+'</a></li>';});
                  html+='</ul></div>';
                  layer.open({type: 1,area: ['auto', '30%'],title: '\u4E3A\u4F60\u627E\u5230\u4E86\u8FD9\u4E9B\u66F2\u76EE\u89E3\u6790\u2026\u2026\u4EC0\u4E48\uFF1F\u6211\u4E11\uFF1F\u4EE5\u540E\u518D\u8BF4\u5427',shade: 0.6,maxmin: false,anim: 2,content: html});
              }

          }else if(/taihe.com/i.test(currentUrl)){
              window.open('http://music.wandhi.com/?url=' + encodeURIComponent(currentUrl.replace("taihe","baidu")));
          }
          else
          {
              window.open('http://music.wandhi.com/?url=' + encodeURIComponent(currentUrl));
          }
      });
      $('body').on('click', '[data-cat=search]', function () {
          window.open('http://tv.wandhi.com/');
      });
      $('body').on('click', '[data-cat=tb]', function () {
          window.open('http://www3.huizhek.com/');
      });
      $('body').on('click', '[data-cat=jd]', function () {
          window.open('http://jd.huizhek.com');
      });};
      InitMenu(menus,f);
  } else if (reAqy.test(currentUrl) || reLS.test(currentUrl) || reTX.test(currentUrl) || reTD.test(currentUrl) || reMG.test(currentUrl) || reSH.test(currentUrl) || rePP.test(currentUrl) || reYk.test(currentUrl)) {
      var menus=[{title:'\u7535\u5F71\u641C\u7D22',show:'\u7535\u5F71<br>\u641C\u7D22',type:'search'},{title:'\u89C6\u9891\u89E3\u6790',show:'\u89C6\u9891<br>\u89E3\u6790',type:'process'},{title:'\u7EDD\u4E16\u597D\u5238',show:'\u7EDD\u4E16<br>\u597D\u5238',type:'tb'},{title:'\u4EAC\u4E1C\u597D\u5238',show:'\u4EAC\u4E1C<br>\u597D\u5238',type:'jd'}];        
      InitMenu(menus,function(){
      $('body').on('click', '[data-cat=process]', function () {
          window.open('http://tv.wandhi.com/go.html?url=' + encodeURIComponent(window.location.href));
      });
      $('body').on('click', '[data-cat=search]', function () {
          window.open('http://tv.wandhi.com/');
      });
      $('body').on('click', '[data-cat=tb]', function () {
          window.open('http://www3.huizhek.com/');
      });
      $('body').on('click', '[data-cat=jd]', function () {
          window.open('http://jd.huizhek.com');
      });})
  } else if (reTaoBao.test(currentUrl) || reTmall.test(currentUrl)) {
      loader();
      TINT();
  } else if (reJd.test(currentUrl)) {
      var keywords = $(".sku-name").text().trim();
      $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>');
      $(".btn-yhj").on('click', function () {
          window.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(keywords));
      });
  }else if(reSXB.test(currentUrl)){
      var menus=[{title:'\u67E5\u770B\u7B54\u6848',show:'\u67E5\u770B<br>\u7B54\u6848',type:'search'},{title:'\u6253\u8D4F\u4F5C\u8005',show:'\u6253\u8D4F<br>\u4F5C\u8005',type:'process'},{title:'\u7EDD\u4E16\u597D\u5238',show:'\u7EDD\u4E16<br>\u597D\u5238',type:'tb'},{title:'\u4EAC\u4E1C\u597D\u5238',show:'\u4EAC\u4E1C<br>\u597D\u5238',type:'jd'}];
      InitMenu(menus,function(){
          $('body').on('click', '[data-cat=process]', function () {
              layer.open({type: 1,title: '\u8bf7\u6211\u559d\u4e00\u676f',shadeClose: true,area: '800px',content: '<img src="https://i.loli.net/2019/05/14/5cda672add6f594934.jpg">'});
          });
          $('body').on('click', '[data-cat=search]', function () {SXB();});
          $('body').on('click', '[data-cat=tb]', function () {
              window.open('https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=');
          });
          $('body').on('click', '[data-cat=jd]', function () {
              window.open('https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z');
          });});
  }else if(reBDY.test(currentUrl)){
      var menus=[{title:'\u79BB\u7EBF\u4E0B\u8F7D',show:'\u79BB\u7EBF<br>\u4E0B\u8F7D',type:'search'},{title:'\u6253\u8D4F\u4F5C\u8005',show:'\u6253\u8D4F<br>\u4F5C\u8005',type:'process'},{title:'\u7EDD\u4E16\u597D\u5238',show:'\u7EDD\u4E16<br>\u597D\u5238',type:'tb'},{title:'\u4EAC\u4E1C\u597D\u5238',show:'\u4EAC\u4E1C<br>\u597D\u5238',type:'jd'}];
      InitMenu(menus,function(){            
          $('body').on('click', '[data-cat=process]', function () {
              layer.open({type: 1,title: '\u8bf7\u6211\u559d\u4e00\u676f',shadeClose: true,area: '800px',content: '<img src="http://i1.fuimg.com/500348/6717e02198116ae4s.png">'});
          });
          $('body').on('click', '[data-cat=search]', function () {window.location.href=window.location.href.replace('baidu.com','baiduwp.com');});
          $('body').on('click', '[data-cat=tb]', function () {
              window.open('https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=');
          });
          $('body').on('click', '[data-cat=jd]', function () {
              window.open('https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z');
          });
      });
  }
  function loader() {
      $("body").append($('<script type="text/javascript" src="//lib.baomitu.com/jquery/1.12.4/jquery.min.js"></script>'));
  }
  function getPar(a) {
      var b = location.search.match(new RegExp("[\?\&]" + a + "=([^\&]+)", "i"));
      if (b == null || b.length < 1) {
          return "";
      }
      return b[1];
  }
  function appendCss(url) {
      $('head').append($('<link rel="stylesheet" href="' + url + '">'));
  } 
  function TINT() {var h='https://api.wandhi.com';var bid = getPar('id');var api = '/api/tb/infos/' + bid;
  appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
  var init = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b onclick=window.open('https://link.zhihu.com/?target=http://www3.huizhek.com') style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";$('#J_LinkBasket').parent().parent().prepend(init);$('.J_LinkAdd').parent().parent().prepend(init);if (reTaoBao.test(currentUrl)) {$('#wandhi_table').addClass('wandhi_tab_taobao');} else {$('#wandhi_table').addClass('wandhi_tab_tmall');}$.getJSON(h+ api, function (d) {$("#wandhi_table tbody tr").remove();var row = "";if (d.code) {d.data.forEach(e => {row+="<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>领取</b></td></tr>";});} else {row = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>";}$("#wandhi_table tbody").append(row);});}
  var answer="-1";
  function SXB(){var loading=layer.load(1, {shade: [0.8, '#393D49'], time:10* 1000});var h='https://api.wandhi.com';var id=$("#Hidd_id").val();if(!id){Msg("\u6570\u636e\u5f02\u5e38\u8bf7\u8054\u7cfb\u4f5c\u8005");return;}var api='/api/tools/sxb/'+id;GM_xmlhttpRequest({headers:{ "Content-Type": "application/x-www-form-urlencoded"},method:"POST",url:"http://www.shangxueba365.com/post.php",responseType:"JSON",data:"docinfo="+encodeURIComponent("https://www.shangxueba.com/ask/"+id+".html"),onload:function(res){if(res.status==200&&res.response.status){showAnswer(res.response.msg);}else{Msg("\u672a\u53d1\u73b0\u7b54\u6848");}layer.close(loading);}});}    
  function showAnswer(h){layer.closeAll();layer.open({type: 1,title: '\u7b54\u6848',area: ['400px', '300px'],shade: 0,offset: 'lb',maxmin: true,content: h});}
  function Msg(msg){layer.closeAll();layer.msg(msg, {icon: 5});}
  function InitCurrentUrl(){currentUrl = window.location.href;}
  function InitMenu(obj,init){
      var menusclass=['first','second','third','fourth','fifth'];
      var str="";
      $.each(obj,function(i,o){
          str+='<a href="javascript:void(0)" title="'+o.title+'" data-cat="'+o.type+'" class="menu-item menu-line menu-'+menusclass[i]+'">'+o.show+'</a>';
      });
      var sidenav = '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="aside-nav"><label for="" class="aside-menu" title="\u6309\u4F4F\u62D6\u52A8">VIP</label>'+str+'</div>';
      $("body").append(sidenav).append($('<link rel="stylesheet" href="//cdn.wandhi.com/style/tv/asidenav.css">')).append($('<link rel="stylesheet" href="https://lib.baomitu.com/layer/3.1.1/theme/default/layer.css">'));
      var ua = navigator.userAgent;
      /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#aside-nav").addClass("no-filter");
      var drags = { down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0 }, asideNav = $("#aside-nav")[0], getCss = function (a, e) { return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e] };
      $("body").on("mousedown","#aside-nav", function (a) {
          drags.down = !0, drags.clientX = a.clientX, drags.clientY = a.clientY, drags.x = getCss(this, "left"), drags.y = getCss(this, "top"), drags.winHei = $(window).height(), drags.winWid = $(window).width(), $(document).on("mousemove", function (a) {
              var e = a.clientX - drags.clientX,
                  t = a.clientY - drags.clientY;
              asideNav.style.top = parseInt(drags.y) + t + "px";
              asideNav.style.left = parseInt(drags.x) + e + "px";
          })
      }).on("mouseup","#aside-nav", function () {
          drags.down = !1, $(document).off("mousemove")
      });
      init();
  }
  function InitMenu(obj,init){
    var menusclass = ['first','second','third','fourth','fifth'];
    var str = '';
    $.each(obj, function(i,o){
      str+=''
    })
    var sidenav = ''
    var ua = navigator.userAgent;
    /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $('#aside-nav').addClass('no-filter');
    var drags = {}
  }
})();