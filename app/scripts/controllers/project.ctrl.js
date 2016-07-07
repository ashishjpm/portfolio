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
                name: 'TRAI - Public Portal',
                description: 'things written about me',
                image: 'app/images/4.jpg'
            },
            {
                id: 'project2',
                name: 'BESCOM - Analytic Dashboard',
                description: 'things written about me',
                image: 'app/images/2.jpg'
            },
            {
                id: 'project3',
                name: 'HALO - One Minute BI Tool',
                description: 'things written about me',
                image: 'app/images/7.jpg'
            },
            {
                id: 'project4',
                name: 'AWS monitoring tool',
                description: 'things written about me',
                image: 'app/images/6.jpg'
            },
            {
                id: 'project5',
                name: 'Web Application monitoring tool',
                description: 'things written about me',
                image: 'app/images/5.jpg'
            },
            {
                id: 'project6',
                name: 'Data analysis platform',
                description: 'things written about me',
                image: 'app/images/3.jpg'
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