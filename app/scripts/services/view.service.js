'use strict';

/**
 *services/view.service.js
 * ===========
 * This service is created to use provide service to view controller.
 *
 * @class portfolio.services.ViewService
 * @memberOf portfolio.services
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */
angular.module('portfolio.services')
.factory('ViewService', function ($http, Settings, $state, Properties, $log) {
    
    function getDimLvl(){
    }
    
  return {
      getDimLvl: getDimLvl
  };

});