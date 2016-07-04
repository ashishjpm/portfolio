/**
 * @ngdoc function
 * @name portfolio.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the portfolio
 */
angular.module('portfolio.controllers')
.controller('IndexCtrl', ['$scope', '$timeout', '$state' ,function ($scope, $timeout, $state) {
	//Global variables
    var tabState = {
        0:'index.about',
        1:'index.skills',
        2:'index.project',
        3:'index.resume'
    };
    
	function initCtrl(){
		//Predefined $scope
		$scope.headerTabs = ['about me','skills','projects','resume'];
        $scope.tabSelected = 0;
        $state.go(tabState[0])
	}
    
    //TODO: watch state and switch tabes bases on state change(can be from url)
    
	$scope.headerTabClick = function(indexNumber,clickedElement){
		console.log(indexNumber,clickedElement);
        $scope.tabSelected = indexNumber;
        $state.go(tabState[indexNumber]);
	}

	initCtrl();

  }]);