angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.iRecycle', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/iRecycle.html',
        controller: 'iRecycleCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page2',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page2/page2')


});