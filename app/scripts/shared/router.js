/**
 * @name portfolio
 * @description
 * # portfolio
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Main router of the application.
 */

angular.module('portfolio.router', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise("/ashish");
    
  $stateProvider
    .state('index', {
      url: "/ashish",
      templateUrl: "app/views/main.html",
      title:'Login',
      controller:"IndexCtrl"
    })
        
});