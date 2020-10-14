// function wxready(){
			$('.ani').each(function(){

				var i = $(this)[0];

				var img = new Image();
				img.src = i.src;

				img.onload = function() {
					i.style.width = img.width / 40 + 'rem';
// 					console.log(i);
				}

			});

	$('.pan').click(function(){
		
		var _this = $('.music-box');
		if(_this.hasClass('pause')){
			
			//play
			_this.removeClass('pause');
			bgm.play();
			// $('.pan').removeClass('pany');//特殊情况
			// $('.pan2').removeClass('panx');
			
		}else{
			//pause
			_this.addClass('pause');
			bgm.pause();
			// $('.pan2').addClass('panx');//特殊情况
			// $('.pan').addClass('pany');
			
		}
		
	});	
	$('body').css({opacity: 1})
	$('.pan').addClass('pand');


	var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
		initialSlide: 0,
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                  
        }
    });

$('.p1-14').click(function(){
       mySwiper.slideTo(1);
	
})
    // mySwiper.slideTo(7);
// }

// $('.download').click(function(){
// 	window.location.href="index2.html";
// })
