export default class CandidatesService {
  constructor($resource) {
    this.$resource = $resource;
    const res = $resource('http://localhost:8000/candidates/:id', {}, {
      saveText: {method: 'POST', transformResponse: data => {
        return {content: data};
      }}});
    return res;
  }
}

CandidatesService.$inject = ['$resource'];
