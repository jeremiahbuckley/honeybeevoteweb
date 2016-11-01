'use strict';

export default class VotersService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/voters');
    return res;
  }
}

VotersService.$inject = ['$resource'];
