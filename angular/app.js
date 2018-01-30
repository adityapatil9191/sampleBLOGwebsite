var app = angular.module('blogApp',['ngRoute']);

app.controller('mainController',["$scope","$http",function($scope,$http){
	$scope.heading = "Welcome to edwisor blog Website";
	$scope.subheading = "Write and share your own blogs";
	$scope.blogs = [];
	$scope.baseUrl = "https://projectsapi.edwisor.com/api/blogs";

	$scope.getAllBlogs = function(){


		$http({
			method:'GET',
			url: $scope.baseUrl + '/all'

		}).then(function successCallBack(response){

			$scope.blogs = response;
			//console.log($scope.blogs.data.data);


		},(function errorCallBack(response){

			alert("Some error occured !!");

		}));

	}

	/*$scope.deleteBlog = function(blogId){
				
		$scope.blogId = blogId;
		$http({
			method:'DELETE',
			url:$scope.baseUrl + '/' +  $scope.blogId

		}).then(function successDelete(response){
			console.log("deleted");
			console.log(response);
		},(function errorDelete(response){
			console.log("could not delete the blog!!")
		}));

	}*/
	$scope.deleteBlog = function(index){
				
		$scope.index = index;
		$scope.blogs.data.data.splice($scope.index,1);
		
	}

	


}]);

app.controller('singleController',["$scope","$http","$routeParams",function($scope,$http,$routeParams){
	
	
	$scope.blogId = $routeParams.blogId;
	$scope.loadSingleBlog = function(){
		$scope.blog = [];
		//alert("I was called");
		//var bId = blogId;
		$scope.baseUrl = "https://projectsapi.edwisor.com/api/blogs";
		
		
		$http({
			method:'GET',
			url: $scope.baseUrl + '/' + $scope.blogId

		}).then(function successCallBack(response){

			$scope.blog = response;
			//console.log($scope.blogs.data.data);
			console.log($scope.blog);

		},(function errorCallBack(response){

			alert("Some error occured !!");

		}));

	

	}

}]);

app.controller('createController',["$scope","$http","$location",function($scope,$http,$location){
	
	//$scope.blogId = $routeParams.blogId;
	


	$scope.postBlog = function(){
		$scope.myData = {

		  heading     : $scope.heading,
          subHeading  : $scope.subHeading,
          bodyHtml    : $scope.bodyHtml,
          author      : $scope.author



	}

		//console.log($scope.heading);


		$http({
			method:'POST',
			data:$scope.myData,
			url: "https://projectsapi.edwisor.com/api/blogs/create" 

		}).then(function successCallBack(response){

			alert("blog has been created");
			$location.url('/');
		},(function errorCallBack(response){

			alert("Some error occured !!");

		}));

	}

}]);


app.controller('editController',["$scope","$http","$location","$routeParams",function($scope,$http,$location,$routeParams){
	//$scope.blog = {};
	$scope.initEdit = function(){
		$scope.blogId = $routeParams.blogId;
		//console.log($scope.blogId);
		$http({
			method:'GET',
			url: "https://projectsapi.edwisor.com/api/blogs/" + $scope.blogId

		}).then(function successCallBack(response){



			$scope.blog = response;
			//console.log($scope.blogs.data.data);
			//console.log($scope.blog.data.data.heading);
			$scope.heading = $scope.blog.data.data.heading;
			$scope.subHeading = $scope.blog.data.data.subHeading;
			$scope.bodyHtml = $scope.blog.data.data.bodyHtml;
			$scope.author = $scope.blog.data.data.author;

			
		},(function errorCallBack(response){

			alert("Some error occured !!");

		}));



	}
	


	$scope.editBlog = function(){
		

		//console.log($scope.myData);
		$scope.myData = {
				heading     : $scope.heading,
          		subHeading  : $scope.subHeading,
          		bodyHtml    : $scope.bodyHtml,
          		author      : $scope.author	
			}



		$http({
			method:'PUT',
			data:$scope.myData,
			url: "https://projectsapi.edwisor.com/api/blogs/" + $scope.blogId + "/edit" 

		}).then(function successCallBack(response){

			alert("blog has been updated");
			$location.url('/');
		},(function errorCallBack(response){

			alert("Some error occured !!");

		}));

	}

}]);