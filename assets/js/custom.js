(function ($) {
	// preloder
	$(window).on("load", function () {
		$("#preloader").fadeOut();
		$("#preloader").delay(500).fadeOut("slow");
		$("body").delay(500).css({ overflow: "visible" });
	});
	
	
	$(".short-img-item a").fancybox();

	 
	function myFunction(x) {
		x.classList.toggle("change");
	  }
        
		// hero
		$(".hero_slider_area").owlCarousel({
			items:1,
			nav:true,
			autoplay:false,
			loop:true,
			 dots:false,
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			 
			 
		});
		// about
		$(".about_slider_box").owlCarousel({
			items:1,
			nav:false,
			autoplay:true,
			loop:true,
			 dots:true,
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			 
			 
		});
		// owl
		$(".tavola-extere-slider").owlCarousel({
			items:3,
			nav:true,
			autoplay:true,
			loop:true,
			 
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			  responsive: {
				0: {
					items: 1,
				},
				767: {
					items: 2,
				},
				1000: {
					items: 3,
				},
				1200: {
					items: 4,
				},
			}
			 
		});
		// micro_slider
		$(".micro_slider").owlCarousel({
			items:3,
			nav:false,
			autoplay:true,
			loop:true,
			 
			animateOut: 'slideOutUp',
			animateIn: 'slideInUp',
			 
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			  responsive: {
				0: {
					items: 1,
				},
				737: {
					items: 2,
				},
				1000: {
					items: 2,
				}
			}
			 
		});
		// Product_view_slide
		$(".juel").owlCarousel({
			items:1,
			nav:true,
			autoplay:true,
			loop:true,
			 dots:false,
			// animateOut: 'slideOutUp',
			// animateIn: 'slideInUp',
			 
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			 
			 
		});
		// cosa_dicona_slider
		$(".cosa_dicona_slider").owlCarousel({
			items:4,
			nav:false,
			autoplay:true,
			loop:true,
			 dots:true,
		 
			 
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			responsive: {
				0: {
					items: 1,
				},
				737: {
					items: 2,
				},
				981: {
					items: 4,
				}
			}
			 
			 
		});
		$(".fildter-button ul li").click(function(){
			$(".fildter-button ul li").removeClass("filter_active");
			$(this).addClass("filter_active");
		});
		$(".prfile_left_site ul li").click(function(){
			$(".prfile_left_site ul li").removeClass("collapsedd");
			$(this).addClass("collapsedd");
		});

		// c slide js
		$(".show-c-slide").owlCarousel({
			items:3,
			autoplay:false,
			loop:true,
			nav:true,
			margin: 10,
			dots:false,
			navText: ['<img src="assets/images/icon/arrow_left.png">','<img src="assets/images/icon/arrow_right.png">'],
			responsive: {
				0: {
					items:1,
				},
				480: {
					items: 2,
				},
				1200: {
					items:3,
				}
				 
				 
			}
			 
		});

		$(".categori-side-bar").click(function(){
			$(".categori-side-bar").toggleClass("left_side_bar");
		});
		$(".mega-show").click(function(){
			$(".mega-menu-area").fadeToggle();
		});
		// $(".mobile_icon_bar").click(function(){
		// 	$(".menu ul").fadeToggle();
		// });
		$(".product-hover-effet ul li.search-box a").click(function(e){
			 	e.preventDefault();
				 $(".product-hover-effet ul li.search-box a").toggleClass("click_bg");
		});
		$(".prfile_left_site ul li a").click(function(e){
			 	e.preventDefault();
				//  $(".product-hover-effet ul li.search-box a").toggleClass("click_bg");
		});

		 // Back to TOP 
        $('.scrollBtn').click(function(){
          $('html,body').animate({
            scrollTop:0
          },500);

          return false;
        });


          /* offcanvas-menu  */
				  $(".menu-trigger").on("click", function(){

				    $(".offcanvas-menu, .offcanvas-overly").addClass("canvas-active");
				    return false;

				  });
				  $(".menu-close, .offcanvas-overly").on("click", function(){

				      $(".offcanvas-menu, .offcanvas-overly").removeClass("canvas-active");

				  });

				    // cart header 
		  $(".cart-d img").on("click", function(){

		      $(".carrello").addClass("carrello-active");
		      return false;

		  });
		  $(".carrello-close").on("click", function(){

		      $(".carrello").removeClass("carrello-active");

		  });
		   // niceSelect 
	//   $("select").niceSelect();
		 
		 
})(jQuery);

$(window).scroll(function(){

    var scrollValue = $(this).scrollTop();

    if(scrollValue>500){
      $('.scrollBtn').fadeIn();
    }else{
       $('.scrollBtn').fadeOut();
    }

  });