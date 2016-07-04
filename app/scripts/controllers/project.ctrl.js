/**
 * @name portfolio.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the portfolio
 */
angular.module('portfolio.controllers')
.controller('ProjectCtrl', ['$scope', '$timeout', '$state' ,function ($scope, $timeout, $state) {
	//Global variables
    
	function initCtrl(){
		//Predefined $scope
		$scope.projects = ['about me','skills','projects','resume'];
	}

	initCtrl();

  }]);