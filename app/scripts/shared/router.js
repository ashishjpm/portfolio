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
      abstract: true,
      url: "/ashish",
      templateUrl: "app/views/main.html",
      title:'Login',
      controller:"IndexCtrl"
    })
    .state('index.about', {
      url: "/about",
      templateUrl: "app/views/about/about.html",
      title:'About',
      controller:"AboutCtrl"
    })
    .state('index.skills', {
      url: "/skills",
      templateUrl: "app/views/skills/skills.html",
      title:'Skills',
      controller:"SkillsCtrl"
    })
    .state('index.project', {
      url: "/project",
      templateUrl: "app/views/project/project.html",
      title:'Project',
      controller:"ProjectCtrl"
    })
    .state('index.resume', {
      url: "/resume",
      templateUrl: "app/views/resume/resume.html",
      title:'Resume',
      controller:"ResumeCtrl"
    })
});