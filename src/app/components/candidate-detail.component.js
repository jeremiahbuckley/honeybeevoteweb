class CandidateDetailController {
  delete(id) {
    this.onDelete(id);
  }

  vote(id) {
    this.onVote(id);
  }
}

export const candidateDetail = {
  template: require('./candidate-detail.html'),
  controller: CandidateDetailController,
  bindings: {
    candidate: '<',
    onDelete: '&',
    onVote: '&'
  }
};
