var main = function(){
	// Function to show the right panel
	$('.catalog-item').click(function(){
		$('.left-panel').addClass('col-sm-8');
		$('.left-panel').removeClass('col-sm-12');
		$('.right-panel').delay(400).show('slide', { direction: 'right'}, 400);
		$('.active-item-picture').fadeIn(200);
	});
	
	// Function to hide the right panel
	$('.close-panel').click(function(){
		$('.right-panel').hide('slide', { direction: 'right'}, 400);
		$('.left-panel').delay(400).addClass('col-sm-12');
		$('.left-panel').removeClass('col-sm-8', 400);
	});
	
	// Function to pass-forward through the pictures of an item
	$('.arrow-next-picture').click(function() {
		var currentPicture = $('.active-item-picture');
		var nextPicture = currentPicture.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextPicture.length === 0) {
		  nextPicture = $('.item-picture').first();
		  nextDot = $('.dot').first();
		};
		
		currentPicture.removeClass('active-item-picture');
		currentPicture.hide();
		nextPicture.fadeIn(200).addClass('active-item-picture');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});
	
	// Function to pass-backward through the pictures of an item
	$('.arrow-prev-picture').click(function() {
		var currentPicture = $('.active-item-picture');
		var prevPicture = currentPicture.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevPicture.length === 0) {
		  prevPicture = $('.item-picture').last();
		  prevDot = $('.dot').last();
		};
		
		currentPicture.removeClass('active-item-picture');
		currentPicture.hide();
		prevPicture.fadeIn(200).addClass('active-item-picture');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

};

$(document).ready(main);