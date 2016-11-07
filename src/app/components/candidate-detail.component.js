class CandidateDetailController {
  constructor($log) {
    this.$log = $log;
  }

  delete(id) {
    return this.onDelete && this.onDelete({_id: id});
  }

  vote(id) {
    return this.onVote && this.onVote({_id: id});
  }
}

CandidateDetailController.$inject = ['$log'];

export const candidateDetail = {
  template: require('./candidate-detail.html'),
  controller: CandidateDetailController,
  bindings: {
    candidate: '<',
    onDelete: '&',
    onVote: '&'
  }
};
