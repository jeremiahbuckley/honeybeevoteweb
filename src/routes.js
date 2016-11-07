export default routesConfig;

import electionsController from './app/components/elections.controller.js';
import votersListController from './app/components/voters-list.controller.js';
import candidatesListController from './app/components/candidates-list.controller.js';
import electionDetailController from './app/components/election-detail.controller.js';
import voterDetailController from './app/components/voter-detail.controller.js';

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
      templateUrl: './app/components/elections.html',
      controller: electionsController,
      controllerAs: 'elections'
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
    .state('election-detail', {
      url: '/election-detail',
      templateUrl: './app/components/election-detail.html',
      controller: electionDetailController,
      controllerAs: 'electionDetail'
    })
    .state('voter-detail', {
      url: '/voter-detail',
      templateUrl: './app/components/voter-detail.html',
      controller: voterDetailController,
      controllerAs: 'voterDetail'
    })
    ;
}
