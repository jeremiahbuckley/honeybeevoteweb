class CandidateDetailController {
  constructor($log) {
    this.$log = $log;
    this.showVotePanel = false;
  }

  delete(id) {
    return this.onDelete && this.onDelete({_id: id});
  }

  showVote() {
    this.showVotePanel = true;
  }

  candidateVoteOnCancel() {
    this.showVotePanel = false;
  }

  candidateVoteOnSave(vData) {
    if (this.onVoteSave) {
      vData.candidateId = this.candidate._id;
      this.onVoteSave({voteData: vData});
    }
  }
}

CandidateDetailController.$inject = ['$log'];

export const candidateDetail = {
  template: require('./candidate-detail.html'),
  controller: CandidateDetailController,
  bindings: {
    candidate: '<',
    onDelete: '&',
    onVoteSave: '&'
  }
};
