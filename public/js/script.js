	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/brand.html',
				controller  : 'brandController'
			})

			// route for the about page
			.when('/reward', {
				templateUrl : 'pages/reward.html',
				controller  : 'rewardController'
			})


			// route for the campaign page
			.when('/catalog', {
				templateUrl : 'pages/catalog.html',
				controller  : 'catalogController'
			})

			// route for the contact page
			.when('/catalog', {
				templateUrl : 'pages/catalog.html',
				controller  : 'catalogController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('brandController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Brand come and see how good I look!';
	});

	scotchApp.controller('rewardController', function($scope) {
		$scope.message = 'Reward! I am an about page.';
	});

	scotchApp.controller('catalogController', function($scope) {
		$scope.message = 'catalog us! JK. This is just a demo.';
	});

