

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/',{

			templateUrl : 'views/index-view.html',
			controller : 'mainController'
		})
		.when('/create',{
			templateUrl : 'views/create.html',
			controller : 'createController'

		})
		.when('/blog/:blogId',{
			templateUrl : 'views/blog-view.html',
			controller : 'singleController'
		})
		.when('/:blogId/edit',{
			templateUrl : 'views/editView.html',
			controller : 'singleController'
		})
		.otherwise(
			{
			templateUrl : 'views/index-view.html',
			controller : 'mainController'

			}

			);



}]);