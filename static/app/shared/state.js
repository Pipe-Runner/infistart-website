angular.module('main')
.config(function($stateProvider){

	$stateProvider
	.state('home',{
		url:"",
		controller:'homeController',
		templateUrl:"./app/components/home/home.html"
	})
	.state('home.mainContent',{
		url:"/maincontent",
		controller:'mainContentController',
		templateUrl:"./app/components/mainContent/mainContent.html"
	});
});
