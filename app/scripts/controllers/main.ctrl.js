/**
 * @ngdoc function
 * @name portfolio.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the portfolio
 */
angular.module('portfolio.controllers')
.controller('IndexCtrl', ['$scope', function ($scope) {
	//Global var

	function initCtrl(){
		//Predefind $scope
		$scope.headerTabs = ['about me','resume','contact','resources'];
	}

	$scope.headerTabClick = function(index,clickedElement){
		console.log(index,clickedElement);
	}

	initCtrl();

  }]);