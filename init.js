$(function() {
		
	// hide set 2 and 3
	$("#thumbs2").hide().addClass('hidden');
	$("#thumbs3").hide().addClass('hidden');
	$("#about_me").hide().addClass('hidden');
	
	// fade overlay with controls, fade container to display titles
	$('#overlay').fadeTo('slow', 0.75);
	$('#thumbnails img').fadeTo('slow', 0.40);
	$('#thumbnails img').hover(
		function () {
			$(this).fadeTo('fast', 1.00);
		},
		function () {
			$(this).fadeTo('fast', 0.40);
		}
	);
	
	$('#showtitle').fadeTo('slow', 0.40);
	$('#showtitle').hover(
		function () {
			$(this).fadeTo('fast', 1.00);
		},
		function () {
			$(this).fadeTo('fast', 0.40);
		}
	);

	// prev slide
	$('a.prev').click(function() {
		return $('#thumbs').prevSlide();
	});

	// next slide
	$('a.next').click(function() {
		return $('#thumbs').nextSlide();
	});

	// start slideshow
	$('a.start').click(function() {
		update_superbgOptions();
		return $('#thumbs').startSlideShow();
	});

	// stop slideshow
	$('a.stop').click(function() {
		my_slideshowActive = false;
		return $('#thumbs').stopSlideShow();
	});

	// load image set 1
	$('a.loadset1').click(function(){
		$('#thumbs1').stopSlideShow();
		$('#thumbs2').stopSlideShow();
		$('#thumbs3').stopSlideShow();
		my_slideshowActive = false;
		$('#showtitle').hide();
		$('#thumbs3').hide().addClass('hidden');
		$('#thumbs2').hide().addClass('hidden');
		$('#thumbs1').superbgimage({ reload: true }).show().removeClass('hidden');
		return false;
	});

	// load image set 2
	$('a.loadset2').click(function(){
		$('#thumbs1').stopSlideShow();
		$('#thumbs2').stopSlideShow();
		$('#thumbs3').stopSlideShow();
		my_slideshowActive = false;
		$('#showtitle').hide();
		$('#thumbs1').hide().addClass('hidden');
		$('#thumbs3').hide().addClass('hidden');
		$('#thumbs2').superbgimage({ reload: true }).show().removeClass('hidden');
		return false;
	});	
	
	// load image set 3
	$('a.loadset3').click(function(){
		$('#thumbs1').stopSlideShow();
		$('#thumbs2').stopSlideShow();
		$('#thumbs3').stopSlideShow();
		my_slideshowActive = false;
		$('#showtitle').hide();
		$('#thumbs1').hide().addClass('hidden');
		$('#thumbs2').hide().addClass('hidden');
		$('#thumbs3').superbgimage({ reload: true }).show().removeClass('hidden');
		return false;
	});
	
	// load blurb
	$('a.loadblurb').click(function(){
		$('#about_me').show().removeClass('hidden');
		$('#about_me').fadeTo('slow', 0.75);
		
		return false;
	});
	
	$('a.close').click(function() {
		$('#about_me').hide().addClass('hidden');
		return false;
	});
	
	
	// toggle fieldsets
	$(".legend").click(function() {
		if ($(this).parent().hasClass('hidden')) {
			$(this).parent().css('height', 'auto').css('padding', '10px').removeClass('hidden').children().show();
			$(this).show().css('display', 'block');
		} else {
			$(this).parent().css('height','15px').css('padding', '0px').addClass('hidden').children().hide();
			$(this).show().css('display', 'block');
		}
	});	

	// toggle overlay
	$("h1 a").click(function() {
		$(this).blur();
		if ($("#overlay").hasClass('hidden')) {
			$("#overlay").css('height','auto').removeClass('hidden').children().show();
			if ($('#thumbs1').hasClass('hidden')) {
				$('#thumbs1').hide();
			}
			if ($('#thumbs2').hasClass('hidden')) {
				$('#thumbs2').hide();
			}
			if ($('#thumbs3').hasClass('hidden')) {
				$('#thumbs3').hide();
			}
		} else {
			$("#overlay").css('height','100px').addClass('hidden').children().hide();
			$("h1").show();
		}
		return false;
	});	
	
});