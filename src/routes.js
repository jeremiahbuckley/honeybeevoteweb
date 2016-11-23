export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'electionsList'
    })
    .state('elections', {
      url: '/elections',
      component: 'electionsList'
    })
    .state('voters', {
      url: '/voters',
      component: 'votersList'
    })
    .state('candidates', {
      url: '/candidates',
      component: 'candidatesList'
    })
    ;
}
