angular.module('mainContent')
.controller('mainContentController',function($scope,$timeout){

    $scope.change=0;
    $scope.showDetails = false;
    $scope.selected = {};

    // Product details array
    var productList = [
        {abstract:"The Edusmart software kit is designed to give you the best expereince of management you have ever experienced. It is aimed at ease of use and exploit the full potential of computer technologies to give you the control of your coaching right at your finger tips",
        pros:["Simple and Intutive UI","Plug in and forget","Online data security"],
        price:"Price: $299/-"},
    ];

    // Animation control timeout
    $timeout(function() {
		$scope.change=1;
		$timeout(function(){
			$scope.change=2;
		},2000);
	},1500);

    // Navigations arrows
    $scope.goDown = function(){
        $scope.snapIndex+=1;
    };

    $scope.goUp = function(){
        $scope.snapIndex-=1;
    };

    // Reder product details in description box
    $scope.renderDetails = function(product_index){
        $scope.showDetails = true;
        $scope.selected = productList[product_index];
    };
});
