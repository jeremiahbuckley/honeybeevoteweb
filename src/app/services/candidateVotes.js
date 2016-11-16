export default class CandidateVotesService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates/:candidateId/elections/:electionId/votes/:id');
    return res;
  }
}

CandidateVotesService.$inject = ['$resource'];
