$(document).ready(function() {

    $('header').hide().delay(500).fadeIn(1000);
    $('nav').hide().delay(1000).fadeIn(1000);


	$('.links').eq(0).on('click', function() {
		$('section').empty();
		var $video = '<iframe width="640" height="480" src="https://www.youtube.com/embed/PTSvtOOySFA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('section').html($video);
	})

	$('.links').eq(2).on('click', function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('links').empty();
		var $colombophoto = '<img src="images/lake.jpg" border=2>';
		$('section').html($colombophoto);
	})

	$('.links').eq(1).on('click', function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('section').empty();
		var $concerts = ' <p>Rice and Curry</p><p>String Hoppers</p><p>Hoppers</p><p>Kottu Roti</p><p>Lamprais</p><p>Faluda</p>';
        $('section').html($concerts);
        $('section').hide().delay(500).fadeIn(1000);
	})

});