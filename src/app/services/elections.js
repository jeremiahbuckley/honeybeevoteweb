'use strict';

export default class ElectionsService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/elections/:id');
    return res;
  }
}

ElectionsService.$inject = ['$resource'];
