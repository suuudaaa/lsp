(function() {
  'use strict';
 //return;
  $('table tr').each(function(){
      var lesson = $(this).find("td").eq(1).children('span').text();
          if(lesson == 'Java技术' || lesson == '有效共同技巧（MOOC）'){
              if($(this).children('td').eq(7).children('a').text() != ''){
                  $(this).children('td').eq(7).children('a').trigger('click');

                  console.log(window.frames[0].document.querySelectorAll('input[id=contentParent_dgData_ImageButton1_0]'));
                  setTimeout(function(){
                      $(window.frames[0].
                        document.querySelectorAll('input[id=contentParent_dgData_ImageButton1_0]')).click();
                      $('#contentParent_dgData_ImageButton1_0').click();

                      console.log('chose class now !');
                  }, 2000);
              }
               else{
                   location.reload();
               }
          }
      });

 // setTimeout(location.reload(), 10000);
})();


(function (){
  $('table tr').each(function(){
    var lesson = $(this).find('td').eq(1).children('span').text();
    if(lesson == 'lessons' || lesson == 'lesson1name'){
      if($(this).children('td').eq(7).children('a'.text() != '')){
        $(this).children('td').eq(7).children('a').trigger('click');
        setTimeout(function(){
          $(window.frame[0].document.querySelectorAll('input[id=contentParent_dgData_ImageButton1_0]'))
          .click();
        },2500)
      }else{
        location.reload();
      }
    }
  })
})();
