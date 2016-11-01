'use strict';

export default class CandidatesService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates');
    return res;
  }
}

// angular
//   .module('app')
//   .factory('candidates', ['$resource',
//     function ($resource) {
//       return $resource('localhost:8000/candidates', {}, {
//       });
//     }
//   ]);
