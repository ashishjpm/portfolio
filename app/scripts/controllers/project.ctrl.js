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
		$scope.projectDetails = false;
		$scope.projects = [
            {
                id: 'project1',
                name: 'about me',
                description: 'things written about me'
            },
            {
                id: 'project2',
                name: 'skills',
                description: 'things written about me'
            },
            {
                id: 'project3',
                name: 'projects',
                description: 'things written about me'
            },
            {
                id: 'project4',
                name: 'resume',
                description: 'things written about me'
            }
        ];
        $scope.projectSelected='/app/views/project/details/';
	}

    $scope.projectClicked = function(projectIndex){
        $scope.projectDetails = true;
        $scope.projectSelected = $scope.projectSelected + $scope.projects[projectIndex].id + '.html';
    }
    
    $scope.backBtnClicked = function(){
        $scope.projectDetails = false;
    }
    
	initCtrl();

  }]);