'use strict';

export default class CandidatesService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates/:id');
    return res;
  }
}

CandidatesService.$inject = ['$resource'];
