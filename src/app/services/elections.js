'use strict';

export default class ElectionsService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/elections');
    return res;
  }
}

ElectionsService.$inject = ['$resource'];

// module.exports = function () {
//   return angular
//     .module('app')
//     .factory('elections', ['$resource',
//       function ($resource) {
//         return $resource('localhost:8000/elections', {}, {
//         });
//       }
//     ]);
// };
