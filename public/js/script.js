	// create the module and name it lsmApp
	var lsmApp = angular.module('lsmApp', ['ngRoute']);

	// configure our routes
	lsmApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the brand page
			.when('/brand', {
				templateUrl : 'pages/brand.html',
				controller  : 'brandController'
			})

			// route for the reward page
			.when('/reward', {
				templateUrl : 'pages/reward.html',
				controller  : 'rewardController'
			})


			// route for the catalog page
			.when('/catalog', {
				templateUrl : 'pages/catalog.html',
				controller  : 'catalogController'
			})

			// route for the campaign page
			.when('/campaign', {
				templateUrl : 'pages/campaign.html',
				controller  : 'campaignController'
			});
			
		});


	// create the controller and inject Angular's $scope
	lsmApp.controller('homeController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome to LSM!';

	});


	// create the controller and inject Angular's $scope
	lsmApp.controller('brandController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Add or Edit Brands!!!!';

		
		$scope.createBrand = function(){

			$scope.message=$scope.brandName;
		};
	});

	lsmApp.controller('rewardController', function($scope) {
		$scope.message = 'Reward! I am an about page.';

		$scope.createReward = function(){

			$scope.message=$scope.rewardName;
		};

	});

	lsmApp.controller('catalogController', function($scope) {
		$scope.message = 'catalog us! JK. This is just a demo.';
	
		$scope.createCatalog = function(){

			$scope.message=$scope.catalogName;
		};

	});


	lsmApp.controller('campaignController', function($scope) {
		$scope.message = 'Campaign us! JK. This is just a demo.';

		$scope.createCampaign = function(){

			$scope.message=$scope.campaignName;
		};

	});