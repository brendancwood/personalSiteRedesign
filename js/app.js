$(document).ready(function(){
	$('.content').hide();

	clickSquare();
	clickButton();
	reloadPortfolio();
	showAbout();
	boxHoverIn();
	boxHoverOut();
});

var clickSquare = function(){
	$('.box').on('click', '.square', function(){
		var page = $(this).data("type");
		$('.footer').hide();
	$(this).closest('.container').slideUp(400, function(){
			$('.' + page).slideDown(400);
		});
	});
}

var clickButton = function(){
	$('.btn').on('click', function(){
		$('.btn').removeClass('active');
		$(this).addClass('active');
	});
}
var reloadPortfolio = function(){
	$('.portfolio').on('click', function(){
		$('.content').slideUp(400, function(){
			$('.box').slideDown(400, function(){
				$('.footer').show();
			});
		});
	});

}
var showAbout = function(){
	$('.about').on('click', function(){
		$('.footer').hide();
		$('.content').slideUp(400);
			$('.box').slideUp(400, function(){
			$('.me').slideDown(400);
			$('.footer').insertAfter('.me').show();
		});
	});

}
var boxHoverIn = function(){
	$('.box').on('mouseenter', '.square', function(){
		var self = $(this);
		var height = self.find('img').height();
		var width = self.find('img').width();
		self.find('.box-hover').css('width', width).css('height', height).animate({opacity: 0.9}, 400);
	});
}
var boxHoverOut = function(){
	$('.box').on('mouseleave', '.square', function(){
		var self = $(this);
		self.find('.box-hover').animate({opacity: 0}, 400);
	});
}
	var halo_4_box = $('<div class="square audio" data-type="halo_4"><a href="#/halo_4"><img class="img-responsive" src="images/Halo4Thumb.jpg" /></a><div class="box-hover"><p>Halo 4 - Sound Reskin</p></div></div>');
	var alien_rage_box = $('<div class="square audio" data-type="alien_rage"><a href="#/alien_rage"><img class="img-responsive" src="images/AlienRageThumb.png" /></a><div class="box-hover"><p>Alien Rage - Xbox360, PC</p></div></div>');
	var soundrift_box = $('<div class="square audio dev game" data-type="soundrift"><a href="#/soundrift"><img class="img-responsive" src="images/SounDriftThumb.png" /></a><div class="box-hover"><p>SounDrift - iOS</p></div></div>');
	var warpshooter_box = $('<div class="square audio dev game" data-type="warpshooter"><a href="#/warpshooter"><img class="img-responsive" src="images/WarpShooterThumb.jpg" /></a><div class="box-hover"><p>Warpshooter - Xbox360</p></div></div>');
	var zeke_in_orbit_box =	$('<div class="square audio dev game" data-type="zeke_in_orbit"><a href="#/zeke_in_orbit"><img class="img-responsive" src="images/ZIOThumb.jpg" /></a><div class="box-hover"><p>Zeke in Orbit - iOS</p></div></div>');
	var bubble_grubble_box = $('<div class="square audio" data-type="bubble_grubble"><a href="#/bubble_grubble"><img class="img-responsive" src="images/BubbleGrubbleThumb.jpg" /></a><div class="box-hover"><p>Bubble Grubble - iOS</p></div></div>');
	var golden_arrow_box =	$('<div class="square audio" data-type="golden_arrow"><a href="#/golden_arrow"><img class="img-responsive" src="images/GoldenArrowThumb.png" /></a><div class="box-hover"><p>Golden Arrow - iOS</p></div></div>');
	var pure_data_box =	$('<div class="square dev audio" data-type="pure_data"><a href="#/pure_data"><img class="img-responsive" src="images/PureDataThumb.jpg" /></a><div class="box-hover"><p>Pure Data - Arduino</p></div></div>');
	
	var digital_device_box = $('<div class="square audio" data-type="digital_device"><a href="#/digital_device"><img class="img-responsive" src="images/DigitalDeviceThumb.jpg" /></a><div class="box-hover"><p>Digital Device Sounds</p></div></div>');
	var gauntlet_box = 	$('<div class="square audio" data-type="gauntlet"><a href="#/gauntlet"><img class="img-responsive" src="images/GauntletThumb.jpg" /></a><div class="box-hover"><p>Gauntlet Animation</p></div></div>');
	var bent_on_control_box =	$('<div class="square audio" data-type="bent_on_control"><a href="#/bent_on_control"><img class="img-responsive" src="images/BOCThumb.jpg" /></a><div class="box-hover"><p>Bent On Control CD</p></div></div>');

	//Start with DEV work
	var displayBox = [soundrift_box,warpshooter_box,zeke_in_orbit_box,pure_data_box];
		for(var i=0; i<displayBox.length; i++){
			$('.box-slot-' + i).append(displayBox[i]);
			
		}

		//AUDIO FILTER
		$('button.audio').on('click', function(){
			if(!$('button.audio').hasClass('active')){
			displayBox = [];
			$('.square').detach();
			//add projects to audio filter
			displayBox.push(alien_rage_box, soundrift_box, warpshooter_box, zeke_in_orbit_box, pure_data_box, bubble_grubble_box, golden_arrow_box, halo_4_box, digital_device_box, gauntlet_box, bent_on_control_box);

				$.each(displayBox, function(i, value){
					$('.box-slot-' + i).append(displayBox[i]);
					$('.box-slot-' + i).find('img').css('height', 0).css('width', 0).animate({height: "100%", width: "100%"}, 600);
				});
			}
		});
		//DEV FILTER
		$('button.dev').on('click', function(){
			if(!$('button.dev').hasClass('active')){
			displayBox = [];
			$('.square').detach();
			//add projects to dev filter
			displayBox.push(soundrift_box,warpshooter_box,zeke_in_orbit_box,pure_data_box);

				$.each(displayBox, function(i, value){
					$('.box-slot-' + i).append(displayBox[i]);
					$('.box-slot-' + i).find('img').css('height', 0).css('width', 0).animate({height: "100%", width: "100%"}, 600);
				});
			}
		});
		//GAME FILTER
		$('button.games').on('click', function(){
			if(!$('button.game').hasClass('active')){
			displayBox = [];
			$('.square').detach();
			//add projects to dev filter
			displayBox.push(soundrift_box,warpshooter_box,zeke_in_orbit_box);

				$.each(displayBox, function(i, value){
					$('.box-slot-' + i).append(displayBox[i]);
					$('.box-slot-' + i).find('img').css('height', 0).css('width', 0).animate({height: "100%", width: "100%"}, 600);
				});
			}
		});

