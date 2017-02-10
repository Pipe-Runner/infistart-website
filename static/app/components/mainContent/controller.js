angular.module('mainContent')
.controller('mainContentController',function($scope,$timeout){

    $scope.change=0;
    $scope.showDetails = false;

    $timeout(function() {
		$scope.change=1;
		$timeout(function(){
			$scope.change=2;
		},2000);
	},1500);

    $scope.goDown = function(){
        $scope.snapIndex+=1;
    };

    $scope.goUp = function(){
        $scope.snapIndex-=1;
    };

    $scope.renderDetails = function(product_index){
        $scope.showDetails = true;
    };
});
