export default class CandidateVotesService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates/:candidateId/votes/:id');
    return res;
  }
}

CandidateVotesService.$inject = ['$resource'];
