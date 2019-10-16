var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// скрывает модальное окно
	$(".form-wrap__link").click(function () {
		$.magnificPopup.close()
	});
	// /скрывает модальное окно
	// для свг
	svg4everybody({});
	JSCCommon.magnificPopupCall();

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>')

	// аккордеон
	$('.accordeon-head').on('click', function () {
		$('.accordeon-body').not($(this).next()).slideUp(500);
		$(this).next().slideDown(500);
		$('.accordeon-head').not($(this)).removeClass('active');
		$(this).addClass('active');
		$('.accordeon-body').removeClass('active-body');
	});
	// /
	$('.container-with-sticky__toggle-block--js').on('click', function () {
		$('.container-with-sticky__sticky-block').toggleClass('active');
		$(this).toggleClass('active');
		// $(this).next().slideDown(500);
		// $('.accordeon-head').not($(this)).removeClass('active');
		// $(this).addClass('active');
		// $('.accordeon-body').removeClass('active-body');
	});
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();


		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();

	// листалка по стр
	$(".scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		elementClickmin = elementClick.replace('/', '');
		if (elementClickmin) {
			//  elementClick = '/' + elementClick;
			var destination = $(elementClickmin).offset().top;
			// console.log(elementClick.replace( '/'));

			$('html, body').animate({
				scrollTop: destination
			}, 1000);

			return false;
		}

		// console.log(elementClick)
	});

	// // карусель
	$('.s-reviews__slider').slick({
		// slidesToShow: 1,
		// slidesToScroll: 1,
		// dots: false,
		speed: 700,
		// infinite: true,
		// loop: true,
		// arrows: true,
		// mobileFirst: true,
		// // centerMode: true,
		// // focusOnSelect: true ,
		// // variableWidth: true,
		prevArrow: $('.prev-btn'),
		nextArrow: $('.next-btn'),
	});

	$(".container-with-sticky__sticky-block").stick_in_parent({
		parent: '.container-with-sticky',
		inner_scrolling: true,
		offset_top: 120,
		// // recalc_every: 1,
		//  recalc_every: true,
	});

	$('.parallax-block').parallax({
		speed: 0.7,
	});

	$('.s-gal__slider\
	,.slider-for2 ')
		.on('lazyLoaded', function (event, slick, image, imageSource) {
			image.parent().css('background-image', 'url(' + image.attr('src') + ')');
		});


});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX


	// /LazyFunction

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},
	// /magnificPopupCall

	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
		$('.menu-mobile--js.active').swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
				if (direction == 'right') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
			},
			triggerOnTouchEnd: false,
		});
	},
	// /mobileMenu

	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask

};