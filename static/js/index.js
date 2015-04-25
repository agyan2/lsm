$(document).ready(function(){

	console.log('on load');
	$('#brandDiv').hide();
	$('#rewardDiv').hide();
	$('#catalogDiv').hide();
	$('#campaignDiv').hide();

	$('#brand').on('click',function(){

		console.log('on brand click');
		$('#brandDiv').show();
		$('#rewardDiv').hide();
		$('#catalogDiv').hide();
		$('#campaignDiv').hide();	
	});

	$('#reward').on('click',function(){

		console.log('on reward click');
		$('#brandDiv').hide();
		$('#rewardDiv').show();
		$('#catalogDiv').hide();
		$('#campaignDiv').hide();	
	});

	$('#catalog').on('click',function(){

		console.log('on catalog click');
		$('#brandDiv').hide();
		$('#rewardDiv').hide();
		$('#catalogDiv').show();
		$('#campaignDiv').hide();	
	});

	$('#campaign').on('click',function(){

		console.log('on campaign click');
		$('#brandDiv').hide();
		$('#rewardDiv').hide();
		$('#catalogDiv').hide();
		$('#campaignDiv').show();	
	});		


});