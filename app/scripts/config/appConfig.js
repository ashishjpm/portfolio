'use strict';

/**
 * Configuration of the portfolio app
 *
 * @class portfolio.services.Settings
 * @memberOf portfolio.services
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * @version 1.0
 */
angular.module('portfolio.services')
  .constant('Settings', {
    'BASE_URL': 'http://portfolio.cloudapp.net/',
//    'BASE_URL': 'http://172.16.0.201:8090/',
    'DO': 'DataObjectServer/data/do',
    'DO_session': 'DataObjectServer/security/session',
    'DO_data':'DataObjectServer/data/do',
    'CS_dbxml':'contentserver/services/embedUtil/support/file',
    'CS_analytic':'contentserver/services/content/analytics/',
    'ANALYTIC_ASYNC_V2' : 'contentserver/services/content/v1/analytics/',
  });
