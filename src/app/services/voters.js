export default class VotersService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/voters/:id');
    return res;
  }
}

VotersService.$inject = ['$resource'];
