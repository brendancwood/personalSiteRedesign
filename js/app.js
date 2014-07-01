$(document).ready(function(){
	$('.content').hide();
	$('.box').hide();
	$('.box').fadeIn(200);
	clickSquare();
	clickButton();
	reloadPortfolio();
});

var clickSquare = function(){
	$('.box').on('click', '.square', function(){
		console.log('CLICK');
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
			// window.open('index.html', '_self');
			$('.box').slideDown(400, function(){
				$('.footer').show();
			});
		});
	});

}
var halo_4_box = $('<div class="square audio" data-type="halo_4"><a href="#/halo_4"><img class="img-responsive" src="images/Halo4Thumb.jpg" /></a><p>Halo 4 - Sound Reskin</p></div>');
	var alien_rage_box = $('<div class="square audio" data-type="alien_rage"><a href="#/alien_rage"><img class="img-responsive" src="images/AlienRageThumb.png" /></a><p>Alien Rage - PC, Xbox360</p></div>');
	var soundrift_box = $('<div class="square audio dev game" data-type="soundrift"><a href="#/soundrift"><img class="img-responsive" src="images/SounDriftThumb.png" /></a><p>SounDrift - iOS</p></div>');
	var warpshooter_box = $('<div class="square audio dev game" data-type="warpshooter"><a href="#/warpshooter"><img class="img-responsive" src="images/WarpShooterThumb.jpg" /></a><p>Warp Shooter - Xbox360</p></div>');
	var zeke_in_orbit_box =	$('<div class="square audio dev game" data-type="zeke_in_orbit"><a href="#/zeke_in_orbit"><img class="img-responsive" src="images/ZIOThumb.jpg" /></a><p>Zeke in Orbit - iOS</p></div>');
	var bubble_grubble_box = $('<div class="square audio" data-type="bubble_grubble"><a href="#/bubble_grubble"><img class="img-responsive" src="images/BubbleGrubbleThumb.jpg" /></a><p>Bubble Grubble- iOS</p></div>');
	var golden_arrow_box =	$('<div class="square audio" data-type="golden_arrow"><a href="#/golden_arrow"><img class="img-responsive" src="images/GoldenArrowThumb.png" /></a><p>Golden Arrow- iOS</p></div>');
	var pure_data_box =	$('<div class="square dev audio" data-type="pure_data"><a href="#/pure_data"><img class="img-responsive" src="images/PureDataThumb.jpg" /></a><p>Arduino - Pure Data</p></div>');
	
	var digital_device_box = $('<div class="square audio" data-type="digital_device"><a href="#/digital_device"><img class="img-responsive" src="images/DigitalDeviceThumb.jpg" /></a><p>Digital Device Sounds</p></div>');
	var gauntlet_box = 	$('<div class="square audio" data-type="gauntlet"><a href="#/gauntlet"><img class="img-responsive" src="images/GauntletThumb.jpg" /></a><p>Gauntlet Animation</p></div>');
	var bent_on_control_box =	$('<div class="square audio" data-type="bent_on_control"><a href="#/bent_on_control"><img class="img-responsive" src="images/BOCThumb.jpg" /></a><p>Bent on Control EP</p></div>');

	//Start with DEV work
	var displayBox = [soundrift_box,warpshooter_box,zeke_in_orbit_box,pure_data_box];
		for(var i=0; i<displayBox.length; i++){
			$('.box-slot-' + i).append(displayBox[i]);
		}

		//AUDIO FILTER
		$('button.audio').on('click', function(){
			displayBox = [];
			$('.square').detach();
			//add projects to audio filter
			displayBox.push(alien_rage_box, soundrift_box, warpshooter_box, zeke_in_orbit_box, pure_data_box, bubble_grubble_box, golden_arrow_box, halo_4_box, digital_device_box, gauntlet_box, bent_on_control_box);

				for(var i=0; i<displayBox.length; i++){
					$('.box-slot-' + i).append(displayBox[i]);
				}
				console.log(displayBox);
			
		});
		//DEV FILTER
		$('button.dev').on('click', function(){
			displayBox = [];
			$('.square').detach();
			//add projects to dev filter
			displayBox.push(soundrift_box,warpshooter_box,zeke_in_orbit_box,pure_data_box);

				for(var i=0; i<displayBox.length; i++){
					$('.box-slot-' + i).append(displayBox[i]);
				}
				console.log(displayBox);
		});
		//GAME FILTER
		$('button.games').on('click', function(){
			displayBox = [];
			$('.square').detach();
			//add projects to dev filter
			displayBox.push(soundrift_box,warpshooter_box,zeke_in_orbit_box);

				for(var i=0; i<displayBox.length; i++){
					$('.box-slot-' + i).append(displayBox[i]);
				}
				console.log(displayBox);
		});

