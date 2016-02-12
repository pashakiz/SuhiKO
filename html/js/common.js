$(document).ready(function() {

	/* Placeholder
		Пример вызова:
		placeholder(".feedback__name");
		placeholder(".feedback__email");
		в html необходимо указать атрибут value
		<input class="feedback__name" type="text" name="name" value="Имя Фамилия">
		<input class="feedback__email" type="text" name="email" value="E-mail">
	*/
	function placeholder(selector) {
		var title = "";
		title = $(selector).val();
		if (title == "") {
			return false;
		}
		$(selector).on("focus", function() {
			if( $(this).val() == title || $(this).val() == "" ) {
				$(this).val("");
			}
		});
		$(selector).on("blur", function() {
			if( $(this).val() == "" ) {
				$(this).val(title);
			}
		});
	}
	
	//Попап менеджер FancyBox
	//Документация: http://fancyapps.com/fancybox/
	//<a class="fancybox" rel="group" href="big_image_1.jpg"><img src="small_image_1.jpg" alt="" /></a>
	//<a class="fancybox" rel="group" href="big_image_2.jpg"><img src="small_image_2.jpg" alt="" /></a>
	// $(".fancybox").fancybox();

	//Каруселька
	//Документация: http://www.owlcarousel.owlgraphic.com/docs/started-welcome.html
	$(".carousel").owlCarousel({
		items : 1,
		autoPlay : true
	});
	$(".product__info__ingredients").owlCarousel({
		items : 6,
		nav : true,
		navText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
		autoPlay : false,
		responsive : {
			0 : {
				items : 3
			},
			480 : {
				items : 4
			},
			768 : {
				items : 6
			},
			992 : {
				items : 8
			},
			1199 : {
				items : 6
			}
		}
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(data) {
				//$('#order_status').html(data);
				$('#order_status').html('Спасибо, Ваша заявка отправлена!');
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
			}
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	//show/hide mobile nav
	$(".btn-mobile-menu").on("click", function() {
		$(".header-nav").slideToggle();
	});

	//plus qty items to bascket
	$(".add2bascket-qty-plus").on("click", function() {
		var n = $(".add2bascket-qty-input").val();
		$(".add2bascket-qty-input").val(++n);
	});
	//minus qty items to bascket
	$(".add2bascket-qty-minus").on("click", function() {
		var n = $(".add2bascket-qty-input").val();
		$(".add2bascket-qty-input").val(--n);
	});

	//fixed menu on scroll
	$(window).scroll(function () {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() > 60) {
			if ($(window).width() < 1200) {
				$(".header").addClass("fixed_menu");
				$("body").addClass("fixed_menu_fix");
			}
		} else {
			if ($(window).width() < 1200) {
				$(".header").removeClass("fixed_menu");
				$("body").removeClass("fixed_menu_fix");
			}
		}
	});
});