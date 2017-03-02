angular.module('mainContent')
.controller('mainContentController',function($scope,$timeout,$interval){

    $scope.textSlide = 0;
    $scope.change = 0;
    $scope.showDetails = false;
    $scope.selected = {};
    $scope.memberNumber = 0;
    $scope.textBlink = 0;
    $scope.snapIndex = 0;
    $scope.wordStay = 1;

    // Product details array
    var productList = [
        {abstract:"The Edusmart software kit is designed to give you the best expereince of management you have ever experienced. It is aimed at ease of use and exploit the full potential of computer technologies to give you the control of your coaching right at your finger tips",
        pros:["Simple and Intutive UI","Plug in and forget","Online data security"],
        price:"Price: $299/-"},
    ];

    // Reder product details in description box
    $scope.renderDetails = function(product_index){
        $scope.showDetails = true;
        $scope.selected = productList[product_index];
    };

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

    // Interval for text slide
    $interval(function () {
        $scope.textSlide = ($scope.textSlide + 1)%3;
    }, 7000);

    // Show person details
    $scope.member = [
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"He is the alpha of the team. Like every entrepreneur, he has a passion to innovate",
            name:"Shriyansh Gautam",
            role:"Android, UI/UX, PHP & JavaScript Developer",
            college:"IIT BHU, CSE",
            email:"shriyansh@infistart.com",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"Loves creating stuff that can make life real easy. Though a bit childish at time, but can get the job done for sure.",
            name:"Hemant Jeengar",
            role:"Android & JavaScript developer",
            college:"IIT BHU, CSE",
            email:"hemant@infistart.com",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"Loves creating stuff that can make life real easy. Though a bit childish at time, but can get the job done for sure.",
            name:"Yash S. Chandra",
            role:"Back-end Developer",
            college:"IIT BHU,CSE",
            email:"yash@infistart.com",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"Loves creating stuff that can make life real easy. Though a bit childish at time, but can get the job done for sure.",
            name:"Shubhankar Shah",
            role:"Infistart's spokesperson & Marketing head",
            college:"IIT BHU, CSE",
            email:"shubhankar@infistart.com",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"Loves creating stuff that can make life real easy. Though a bit childish at time, but can get the job done for sure.",
            name:"Satya Prakash",
            role:"UI/UX & JavaScript Developer",
            college:"IIT BHU, CSE",
            email:"satya@infistart.com",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"Loves creating stuff that can make life real easy. Though a bit childish at time, but can get the job done for sure.",
            name:"Mayank Panchal",
            role:"Android Developer",
            college:"IIT BHU, CSE",
            email:"shriyansh@infistart.com",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
        {
            closeUp:"./assets/team_photos/close_up/Aakash_Mallik.jpg",
            details:"Loves creating stuff that can make life real easy. Though a bit childish at time, but can get the job done for sure.",
            name:"Aakash S. Mallik",
            role:"Full-Stack Developer",
            college:"IIT BHU, CSE",
            email:"aakashs.mallik.cse15@itbhu.ac.in",
            sidePic:"./assets/team_photos/side_view/Aakash_Mallik.jpg",
        },
    ];

    $scope.closeUp = $scope.member[$scope.memberNumber].closeUp;
    $scope.details = $scope.member[$scope.memberNumber].details;
    $scope.title = $scope.member[$scope.memberNumber].name;
    $scope.role = $scope.member[$scope.memberNumber].role;
    $scope.memberEmail = $scope.member[$scope.memberNumber].email;
    $scope.college = $scope.member[$scope.memberNumber].college;

    // Delayed model change & animation trigger
    $scope.showPersonDetails = function(person_index){
        $timeout(function() {
            $scope.memberNumber = person_index;
            $scope.closeUp = $scope.member[person_index].closeUp;
            $scope.details = $scope.member[person_index].details;
            $scope.title = $scope.member[person_index].name;
            $scope.role = $scope.member[person_index].role;
            $scope.memberEmail = $scope.member[person_index].email;
            $scope.college = $scope.member[person_index].college;
    	},300);

        $scope.textBlink = 1;
        $timeout(function() {
    		$scope.textBlink=0;
    	},1000);
    };

    // WordStay Delay
    $timeout(function() {
        $scope.wordStay=0;
    },4200);

    promise = $interval(function () {
        $scope.memberNumber = ($scope.memberNumber + 1)%7;
        $scope.showPersonDetails($scope.memberNumber);
    }, 7000);

    $scope.mouseOnSlide = function(){
        $interval.cancel(promise);
    };
});
