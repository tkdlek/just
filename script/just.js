(function($){

    const just = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header(){
           // 메인버튼에 마우스 오버시(mouseenter === mouseover) 서브메뉴 박스 전체가 아래로
           // 부드럽게 나타난다. 슬라이드 다운 애니메이션
            $('.menu-btn').on({
                mouseenter(){
                    // $('.sub').stop().slideDown(300);
                    $('.sub').stop().show(0);
                },
                focusin(){
                    $('.sub').stop().show(0);
                }
            });
                
            
            // 서브메뉴를 벗어나면 부드럽게 다시 올라간다.
            $('#nav').on({
                mouseleave(){
                    // $('.sub').stop().slideUp(300);
                    $('.sub').stop().hide(0);
                }
            });
        },
        section1(){
            //1. 변수
            let cnt=0;

            //2. 메인슬라이드
            function mainSlide(){ // 0 1 2
                console.log( cnt );
               $('.slide-wrap').stop().animate({top: `${-300*cnt}px`}, 600, function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({top: `${-300*cnt}px`}, 0);
               });
            }

            //3. 다음카운트
            function nextCount(){
                cnt++;
                mainSlide();
            }

            //4. 자동타이머 3초간격
            function autoTimer(){
                setInterval(nextCount, 3000);
            }
            autoTimer();

        },
        section2(){
           
           // 2. 공지사항 버튼 클릭 이벤트
           $('.notice-btn').on({
                click(){
                    $('.notice-btn').removeClass('on');
                    $('.gallery-btn').removeClass('on');
                    $('.notice-box').show();
                    $('.gallery-box').hide();
                }
           });
           
           // 1. 갤러리 버튼 클릭 이벤트
           $('.gallery-btn').on({
                click(){
                    $('.notice-btn').addClass('on');
                    $('.gallery-btn').addClass('on');
                    $('.notice-box').hide();
                    $('.gallery-box').show();
                }
            });
            // 팝업 버튼 클릭 이벤트

            $('.popup-btn').on({
                click(){
                    // $('.popup').show();
                    $('.popup').css({display:'flex'});    // display: block;
                }
            });

            // 팝업 닫기 버튼 클릭 이벤트

            $('.close-btn').on({
                click(){
                    // $('.popup').hide();
                    $('.popup').css({display:'none'});
                }
            });

        },
        footer(){

        }
    }
    just.init();


})(jQuery);