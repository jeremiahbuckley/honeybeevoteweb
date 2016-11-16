export default class CandidateElectionsService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates/:candidateId/elections/:id');
    return res;
  }
}

CandidateElectionsService.$inject = ['$resource'];
