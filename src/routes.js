export default routesConfig;

import electionsListController from './app/components/elections-list.controller.js';
import votersListController from './app/components/voters-list.controller.js';
import candidatesListController from './app/components/candidates-list.controller.js';

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('elections', {
      url: '/elections',
      templateUrl: './app/components/elections-list.html',
      controller: electionsListController,
      controllerAs: 'electionsList'
    })
    .state('voters', {
      url: '/voters',
      templateUrl: './app/components/voters-list.html',
      controller: votersListController,
      controllerAs: 'votersList'
    })
    .state('candidates', {
      url: '/candidates',
      templateUrl: './app/components/candidates-list.html',
      controller: candidatesListController,
      controllerAs: 'candidatesList'
    })
    ;
}
