angular.module('home')
.controller('homeController',function($scope,$timeout,$state){
	$scope.NavFullSize=true;
	$scope.pageLoaded=false;
	$scope.animation=true;
	$timeout(function() {
		$scope.animation=false;
		$timeout(function(){
			$scope.pageLoaded=true;
		},300);
	},3000);

	$state.go('home.mainContent');

	//Function to toggle fullscreen
	$scope.fullScreenToggle = function(){
		elem = document.documentElement;
		if (!document.fullscreenElement && !document.mozFullScreenElement &&
	    !document.webkitFullscreenElement && !document.msFullscreenElement) {
		    if (elem.requestFullscreen) {
		      elem.requestFullscreen();
		    } else if (elem.msRequestFullscreen) {
		      elem.msRequestFullscreen();
		    } else if (elem.mozRequestFullScreen) {
		      elem.mozRequestFullScreen();
		    } else if (elem.webkitRequestFullscreen) {
		      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		    }
		}
		else {
		    if (document.exitFullscreen) {
		      document.exitFullscreen();
		    } else if (document.msExitFullscreen) {
		      document.msExitFullscreen();
		    } else if (document.mozCancelFullScreen) {
		      document.mozCancelFullScreen();
		    } else if (document.webkitExitFullscreen) {
		      document.webkitExitFullscreen();
		    }
		}
	};

});
