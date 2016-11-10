export default class ElectionsCandidatesService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/elections/:id/candidateid/:candidateid');
    return res;
  }
}

ElectionsCandidatesService.$inject = ['$resource'];
