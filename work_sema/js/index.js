 $("document").ready(function () {
     var $ul_li = $("header nav > ul li"),
         $sub = $("header nav .submenu"),
         $sub_ul = $("header nav .submenu ul"),
         $sub_li = $("header nav .submenu ul"),
         $nav_indicator = $("header nav ul i");
     
     $("nav").removeClass("scroll")
     $(window).scroll(function () {
         var pos = $(window).scrollTop();
         if (pos > 100) {
             $("header").addClass("scroll");
             $("nav").addClass("scroll");
             $ul_li.addClass("scroll");
             

         } else {
             $("header").removeClass("scroll");
             $("nav").removeClass("scroll");
             $ul_li.removeClass("scroll");
             
         }



     }); //스크롤 헤더변경 end





     //------header end-----------------------------------------
      
     
     $ul_li.hover(function(){
     var i = $ul_li.index(this);
         $(this).find("a").addClass("active");
         $sub.css("height", "180px");
         $sub_ul.eq(i).addClass("active");
         $sub_ul.eq(i).find("a").addClass("active");
         $nav_indicator.show();
         $nav_indicator.css({
             left : (140*i+70)+"px"
         });
         
     }, function(){
         var i = $ul_li.index(this);
         $(this).find("a").removeClass("active");
         $sub.css("height", "");
         $sub_ul.eq(i).removeClass("active");
         $sub_ul.eq(i).find("a").removeClass("active");
         $nav_indicator.hide();
     })
     $sub_ul.hover(function(){
         var i = $sub_ul.index(this);
         $sub.css("height", "180px");
         $(this).addClass("active");
         $ul_li.eq(i).find("a").addClass("active");
         $sub_ul.eq(i).find("a").addClass("active");
         $nav_indicator.show();
         $nav_indicator.css({
             left : (140*i+70)+"px"
         });
     }, function(){
         var i = $sub_ul.index(this);
         $sub.css("height", "");
         $(this).removeClass("active");
         $ul_li.eq(i).find("a").removeClass("active");
         $sub_ul.eq(i).find("a").removeClass("active");
         $nav_indicator.hide();
     });
     $sub.hover(function(){
         $sub.css("height", "180px");
     }, function(){
         $sub.css("height", "");         
     })
     
     

     //------nav end------------------------------------------

     var $calendar_loca_btn = $(".calendar .calendar-loca ul li"),
         $calendar_icon = $(".calendar .calendar-date-wrap i"),
         $datepicker = $(".calendar .calendar-date-wrap .datepicker"),
         $calendar_content = $(".calendar .calendar-content"),
         $calendar_handler = $(".main .calendar-handler img"),
         $exhibition_item = $(".calendar .big-item .exhibition-item-wrap"),
         loca = 0

     $calendar_loca_btn.click(function () {
         var i = $(this).index();

         $calendar_loca_btn.removeClass("active")
         $(this).addClass("active")

         //장소버튼에 따라 해당 컨텐츠와 핸들러화살표 나타내기
         if (i == 0) {
             $calendar_content.hide();
             $("#original").fadeIn(100);
             $calendar_handler.show();
             loca = 0;
         } else if (i == 1) {
             $calendar_content.hide();
             $("#north").fadeIn(100);
             $calendar_handler.hide();
             loca = 1;
         } else if (i == 2) {
             $calendar_content.hide();
             $("#south").fadeIn(100);
             $calendar_handler.hide();
             loca = 2;
         }

     })

     //캘린더 핸들러 화살표 돌렸을 때 이벤트 (본관만 큰 포스터 슬라이드)
     $calendar_handler.click(function () {
         var i = $(this).index();
         if (i == 0) {
             $exhibition_item.stop().animate({
                 left: "-100%"
             })

         } else if (i == 1) {
             $exhibition_item.stop().animate({
                 left: "0"
             })
         }
         
     });
     
     //----------------------------------------------------------

     var 
//         date = $(".calendar .calendar-date-wrap span").eq(2).text(),
         $day = $(".calendar .calendar-date-wrap span#d"),
         $date = $(".calendar .calendar-date-wrap span#dt"),
         $time_notice = $(".calendar .calendar-content .time-notice-wrap"),
         $date_handler = $(".calendar-date-wrap img")
     
     
     
      var m = new Date();
        document.getElementById("m").innerHTML = m.getMonth() + 1;
        
        
        var dt = new Date();
        document.getElementById("dt").innerHTML = dt.getDate();
        
        var d = new Date();
        document.getElementById("d").innerHTML = d.getDay();

        var dayArray = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
        
        
        $day.html(dayArray[$day.html()]);
     
     
     
    

     function refresh() {

         $date.html(dt.getDate())
         $day.html(dayArray[d.getDay()])
         
     }

     //기본화면(본관) 화살표버튼으로 날짜 바꾸기
     var day = Number(d.getDay())
     $date_handler.click(function(){
         
         var i = $date_handler.index(this),
             date = Number($date.html())
         if (i==0){
             
             $date.html(date - 1);
                    day = day - 1

                    if (day < 0) {
                        day = 6
                    }
                    $day.html(dayArray[day]);
             
         }else if(i == 1){
             $date.html(date + 1)
                    day = day + 1

                    if (day > 6) {
                        day = 0
                    }
                    $day.html(dayArray[day]);
             
         }
         if(loca == 0){
             getDay("original")
         }else if(loca == 1){
             getDay("north")
         }else if(loca == 2){
             getDay("south")
         }
         
         
         
     })
        function getDay(location) {
         
         var day_data = $day.html();
//            alert(day_data)

         if (day_data == "(월)") {
             $time_notice.hide();
             $("#" + location + "-mon").show();

         } else if (day_data == "(화)" || day_data == "(수)" || day_data == "(목)" || day_data == "(금)") {
             $time_notice.hide();
             $("#" + location + "-weekday").show();
         } else if (day_data == "(토)" || day_data == "(일)") {
             $time_notice.hide();
             $("#" + location + "-weekend").show();
         }
     }
     
     
     
     
     
     
     
     
//     function dateHandlerClick() {
//         $date_handler.click(function () {
//             var i = $date_handler.index(this)
////                 currentDate = $(".calendar .calendar-date-wrap span").eq(2).text(),
////                 currentDay = $(".calendar .calendar-date-wrap span").eq(4).text(),
////                 prevDayIdx = currentDayIdx - 1,
////                 nextDayIdx = currentDayIdx + 1;
//             var c = 1;
//
//
//             if (i == 0) {
//
//                 //날짜 내리기
////                 currentDate = parseInt(currentDate);
////                 $date.html(currentDate - 1);
////            
//                 
//                 
//                 var dt = new Date();
//                 document.getElementById("dt").innerHTML = dt.getDate()-c;
//                 
//                 c++;
//                 
//                 //요일 내리기
////                 currentDayIdx--;
////                 if (currentDayIdx <= 0) { // 같거나 작다
////                     currentDayIdx = 7; // 6 > 7로 변경
////                 }
////                 $day.html(dayArray[prevDayIdx]);
////
////                 day = dayArray[prevDayIdx]; //바뀐요일로 업데이트!!
////                 getDay("original");
//                 
//                 var d = new Date();
//        document.getElementById("d").innerHTML = d.getDay();
//        
//        $("span#d").html(dayArray[$("span#d").html()-c]);
//                 
//                 
//
//             } else if (i == 1) {
//                 //날짜 올리기
//                 currentDate = parseInt(currentDate);
//                 $date.html(currentDate + 1);
//
//                 //요일 올리기
//                 currentDayIdx++;
//                 if (currentDayIdx > 5) {
//                     currentDayIdx = -1;
//                 }
//                 console.log(nextDayIdx)
//                 $day.html(dayArray[nextDayIdx]);
//                 day = dayArray[nextDayIdx];
//                 getDay("original");
//
//             }
//         });
//     }; //function dateHandlerClick end



     //0.기본화면에서 original 컨텐츠 나타내기
     //1.기본화면에서 요일별 시간안내(본관), 화살표클릭 함수 실행
    $calendar_content.hide();
    $("#original").show();
     getDay("original");
//     dateHandlerClick();

     //2.[t].장소버튼클릭
     $calendar_loca_btn.click(function () {
         var l = $calendar_loca_btn.index(this);
         if (l == 0) {
             refresh();
             getDay("original");
//             dateHandlerClick();

         } else if (l == 1) {
             refresh();
             getDay("north");
//             dateHandlerClick();

         } else if (l == 2) {
             refresh();
             getDay("south");
//             dateHandlerClick();
         }
     }); //장소버튼클릭 end









     //[!]toggleClass 말고 조건문으로 안되나? 클릭한게 true면 나타나고 아니면 없어지고
     $calendar_icon.click(function () {
         $datepicker.toggleClass("active")
     });
     //     $("html,body").click(function(){
     //         $datepicker.hide()
     //     })


     //전시 포스터 호버 이벤트

     var $exhibition_poster = $(".calendar .big-item .exhibition-item"),
         $exhibition_title = $(".calendar .big-item .exhibition-item p.exhibition-title"),
         $exhibition_date = $(".calendar .big-item .exhibition-item p.exhibition-date"),
         $hover_desc = $(".calendar .big-item .hover-desc");


     $exhibition_poster.mouseenter(function () {
         var hover_src = $(this).find("img").attr("data-alt"),
             default_src = $(this).find("img").attr("data-default");

         $(this).find("img").attr("src", hover_src);
         $(this).find($exhibition_title).hide();
         $(this).find($exhibition_date).hide();


     });
     $exhibition_poster.mouseleave(function () {
         var hover_src = $(this).find("img").attr("data-alt"),
             default_src = $(this).find("img").attr("data-default");

         $(this).find("img").attr("src", default_src);
         $(this).find($exhibition_title).show();
         $(this).find($exhibition_date).show();
         //         
     });









     //------calendar end---------------------------------------

     var $info_icon = $(".info .info-icon-wrap")

     $(window).scroll(function () {
         var pos = $(window).scrollTop();

         if (pos >= 250) {
//             $info_icon.eq(0).stop().animate({
//                 top: "0px"
//             }, 50)
//             setTimeout(function () {
//                 $info_icon.eq(1).stop().animate({
//                     top: "0px"
//                 }, 50)
//             }, 50);
//             setTimeout(function () {
//                 $info_icon.eq(2).stop().animate({
//                     top: "0px"
//                 }, 50)
//             }, 100);
//
//             setTimeout(function () {
//                 $info_icon.eq(3).stop().animate({
//                     top: "0px"
//                 }, 50)
//             }, 150);
             
             
             $info_icon.addClass("scroll")
         }         
     })




     //--------info - end---------------------------------------



     var $event_banner = $(".event-wrap"),
         current = 0,
         $event_banner_item = $(".event-wrap img"),
         item_length = $(".event-wrap img").length,
         //         eventFadeIn = setInterval(slideFadeIn, 5000),
         eventSlide = setInterval(slideTop, 3000)


     //[!] 1234-1234 계속 반복 슬라이드 만드는 방법 찾아보기

     function slideTop() {
         if (current > item_length - 1) {
             current = 0;
         }
         $event_banner.stop().animate({
             top: "-200" * current + "px"
         });
         current++
     }

     $event_banner_item.eq(current).fadeIn(3000)

     function slideFadeIn() {
         var next = (current + 1) % item_length;
         $event_banner_item.eq(current).fadeOut(2000);
         $event_banner_item.eq(next).fadeIn(3000);
         current = next;

         //[!]이거를 연결해서 쓰면 왜 안되나? 같은 선택자인데 eq만 다름
         //이렇게 $event_banner_item.eq(current).fadeOut(3000).eq(next).fadeIn(3000);



     }




     //--------event end--------------------------------------

     var $edu_state_btn = $(".edu-content-section .edu-state li"),
         $recruiting_length = $(".edu-content-wrap#recruiting .edu-item-wrap").length,
         $proceeding_length = $(".edu-content-wrap#proceeding .edu-item-wrap").length,
         $edu_content = $(".edu-content .edu-content-wrap"),
         $edu_item = $(".edu-item-wrap"),
         //         $recruiting_edu_item = $(".edu-content-wrap#recruiting .edu-item-wrap"),
         //         $proceeding_edu_item = $(".edu-content-wrap#proceeding .edu-item-wrap"),
         //         i = 0,
         //         slide1 = setInterval(timer1, 3000),
         edu_current = 0,
         $edu_handler = $(".edu .edu-handler img"),
         slide,
         time = false;


     //모집중, 진행중 리스트 내 아이템 개수 표시
     $(".edu-content-section ul li").eq(0).children("span").html($recruiting_length);
     $(".edu-content-section ul li").eq(1).children("span").html($proceeding_length);


     //     function timer1() {
     //         if (i > $recruiting_length - 3) {
     //             i = 0;
     //         }
     //         i++
     //         $edu_item.stop().animate({
     //             left: -400 * i + "px"
     //         }, 1000)
     //     }
     //
     //     function timer2() {
     //         if (i > $proceeding_length - 3) {
     //             i = 0;
     //         }
     //         i++
     //         $edu_item.stop().animate({
     //             left: -400 * i + "px"
     //         }, 1000)
     //     }

     function slide_move(i) {
         $edu_item.stop().animate({
             left: -400 * i + "px"
         }, 500)
         edu_current = i;
         //         console.log("current:" + edu_current, "i:" + i);
     }


     //[!]이거 안됨 클릭을 안하면 동작x 색이안빠짐.
     function disabled(state) {
         if (edu_current >= $("#" + state).children($edu_item).length - 3) {
             $edu_handler.eq(0).addClass("disabled");
         } else {
             $edu_handler.eq(0).removeClass("disabled");
         }
         if (edu_current <= 0) {
             $edu_handler.eq(1).addClass("disabled");
         } else {
             $edu_handler.eq(1).removeClass("disabled");
         }

     }

     function startSlide(state) {
         slide = setInterval(function () {
             var edu_next = (edu_current + 1) % [$("#" + state).children(".edu-item-wrap").length - 2];
             slide_move(edu_next);

         }, 3000)
     }

     function stopSlide() {
         clearInterval(slide);
     }

     function handlerClick(state) {
         $edu_handler.click(function () {
             var h = $edu_handler.index(this);
             if (time == true) {
                 return;
             }
             setTimeout(function () {
                 time = false;
             }, 500)
             time = true;

             //왼쪽화살표
             if (h == 0) {
                 if (edu_current <= 0) {
                     return;
                 }
                 i = edu_current - 1
                 slide_move(i);


             } //오른쪽화살표
             else {
                 if (edu_current >= $("#" + state).children(".edu-item-wrap").length - 3) {
                     return;
                 }
                 i = edu_current + 1;
                 slide_move(i);
             }
         })
     }



     //1초기화면 : 1)모집중 컨텐츠 나타냄 2)모집중 슬라이드 돌리기 3)화살표클릭 동작  4)호버

     //1-1)
     $(".edu-content-wrap#recruiting").show();
     //     disabled("recruiting");

     //1-2)
     startSlide("recruiting");

     //1-3)
     //화살표클릭
     handlerClick("recruiting");

     //1-4) 호버
     $edu_handler.hover(function () {
         stopSlide(slide);
     }, function () {
         stopSlide(slide);
         startSlide("recruiting");


     })

     $edu_content.hover(function () {
         stopSlide(slide);
     }, function () {
         stopSlide(slide);
         startSlide("recruiting");

     });



     //2.버튼클릭 : 1)버튼색변경 2)해당 컨텐츠를 나타내기 3)슬라이드돌리기

     $edu_state_btn.click(function () {
         var state = $(this).attr("data-value"),
             s = $(".edu-state li").index(this),
             $edu_item_leng = $(".edu-content-section .edu-state ul li span");

         //2-1)버튼색
         $edu_state_btn.removeClass("active");
         $edu_item_leng.removeClass("active");
         $(this).addClass("active");
         $(this).children($edu_item_leng).addClass("active");

         //2-2)해당컨텐츠 나타내기
         $edu_content.hide();
         $(".edu-content-wrap#" + state).fadeIn(300);


         //2-3) 
         //모집중버튼일 때
         if (s == 0) {
             stopSlide(slide);
             $("#recruiting").children(".edu-item-wrap").css("left", "0");
             startSlide("recruiting");
             handlerClick("recruiting");

             //호버 멈추기
             $edu_handler.hover(function () {
                 stopSlide(slide);
             }, function () {
                 stopSlide(slide);
                 startSlide("recruiting");


             })

             $edu_content.hover(function () {
                 stopSlide(slide);
             }, function () {
                 stopSlide(slide);
                 startSlide("recruiting");

             });


             //진행중버튼일 때
         } else if (s == 1) {
             stopSlide(slide);
             $("#proceeding").children(".edu-item-wrap").css("left", "0");
             startSlide("proceeding");
             handlerClick("proceeding");

             //호버 멈추기
             $edu_handler.hover(function () {
                 stopSlide(slide);
             }, function () {
                 stopSlide(slide);
                 startSlide("proceeding");
             })

             $edu_content.hover(function () {
                 stopSlide(slide);
             }, function () {
                 stopSlide(slide);
                 startSlide("proceeding");

             });


         }




     }); //버튼 클릭 end







     //------edu end-------------------------------------------

     var $location_item = $(".intro .intro-content-section .intro-branch"),
         $modal_close_btn = $(".intro .modal span"),
         $location_icon = $(".intro-branch-indicator span"),
         $location_modal = $(".intro .intro-content-section .modal"),
         $intro_video = $("video")

     
     
     
     $location_item.click(function(){
         var i = $location_item.index(this);
         
         $location_modal.eq(i).show();
         $intro_video.eq(i).attr("autoplay", "");

//         // iframe reload
//        $("#video"+i).attr("src", $("#video"+i).attr("src"));
//          $location_modal.find("iframe").show();
//          $location_modal.eq(i).find("iframe").css("display","block");
         
     })
     
     $modal_close_btn.click(function () {
        $location_modal.css("display", "none");
     });
    


     //분관 이미지 호버 시 인디케이터 active
     $location_item.mouseenter(function () {
         var i = $location_item.index(this);
         $location_icon.eq(i).addClass("active");
         $(this).addClass("active");
     })
     $location_item.mouseleave(function () {
         $location_icon.removeClass("active");
         $(this).removeClass("active");
     })
     
     $location_icon.mouseenter(function(){
         var i = $location_icon.index(this);
         $(this).addClass("active");
         $location_item.eq(i).addClass("active");
     })
     $location_icon.mouseleave(function(){
         var i = $location_icon.index(this);
         $location_icon.removeClass("active");
         $location_item.eq(i).removeClass("active");
     })
     


     //동그라미 인디케이터 반복적으로 깜빡깜빡     
     setInterval(function () {
         $location_icon.toggleClass("light");
     }, 1000)



     //-------intro end--------------------------------------

    var $sns_btn = $(".sns .sns-icon-wrap a img");
     $sns_btn.hover(function(){
         var hover_src = $(this).attr("date-hover");
         $(this).attr("src",hover_src);
         
     },function(){
         var default_src = $(this).attr("date-default");
         $(this).attr("src", default_src);
     });





     //--------sns end---------------------------------------


     var $group_visit_btn = $("aside.group-visit"),
         $group_visit_form = $("aside.group-visit-form"),
         $form_close_btn = $("aside.group-visit-form span.close-btn"),
         $top_btn = $("aside.top-btn"),
         pos = $(window).scrollTop()

     $(window).scroll(function () {
         var pos = $(window).scrollTop();
         if (pos > 970) {
             $("aside.top-btn").fadeIn()
         } else {
             $("aside.top-btn").fadeOut()
         }


     })
     $top_btn.click(function () {

         $("html,body").stop().animate({
             scrollTop: "0"
         }, 2000)
     })

     $("#date").datepicker({
         dateFormat: "yy-mm-dd",
         firstDay: 1,
         showWeek: false,
         showAnim: "slideDown",
         showMonthAfterYear: true,
         currentText: "Now",
         showOn: "both",
         buttonText: "<i class='far fa-calendar-alt'></i>"
     })

     
     $("a.ui-state-default").click(function(){
         
         alert("1")
     })
    
//     
//     if($("#ui-datepicker-div table a").hasClass("ui-state-active")){
//         alert("1")
//     }
//     
     
     
     $group_visit_btn.click(function () {

         $(this).stop().animate({
             left: "320px"
         }, 500, "linear");
         $group_visit_form.stop().animate({
             left: "0px"
         }, 500, "linear");
         

     })

     $form_close_btn.click(function () {

         $group_visit_form.stop().animate({
             left: "-320px"
         }, 500, "linear");
         $group_visit_btn.stop().animate({
             left: "0px"
         }, 500, "linear");
     })
     

     
     
     
     var $user_input = $("aside.group-visit-form .form-content .input-wrap input");
     
     $user_input.focusin(function(){
         $(this).attr("placeholder","");
         $(this).addClass("focus");
         $(this).next("label").addClass("focus");

         
     });
     $user_input.focusout(function(){
         var pl_default = $(this).attr("data-default"),
             i = $(this).parent().index(".input-wrap");
         

         
         setTimeout(function(){
              $(".input-wrap").eq(i).find("input").attr("placeholder", pl_default);
         },450)
       
         $(this).removeClass("focus");
         $(this).next("label").removeClass("focus");
         
         
     });
     
     var $submit = $("aside.group-visit-form button.submit");
     
     $submit.click(function(){
         $(this).html("");
         setTimeout(function(){
            $submit.html("<i class='fas fa-check'></i>");
         },450);         
         $(this).addClass("complete");
     })
     
     
     
     


     //-----aside top btn, group visit end-------------------









 }); //query end
