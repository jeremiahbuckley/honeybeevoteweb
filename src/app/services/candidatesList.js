export default class CandidatesListService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates/list', null,
      {getList: {method: 'POST', isArray: true}});
    return res;
  }
}

CandidatesListService.$inject = ['$resource'];
