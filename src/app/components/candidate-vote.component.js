class CandidateVoteController {
  constructor($log) {
    this.$log = $log;
    this.selectedVoter = null;
    this.value = 0;
    this.reset();
  }

  save() {
    const vId = this.selectedVoter._id;
    const val = this.value;
    this.reset();
    if (this.onSave) {
      this.onSave({voteData: {voterId: vId, value: val}});
    }
  }

  cancel() {
    this.reset();
    if (this.onCancel) {
      this.onCancel();
    }
  }

  reset() {
    this.value = 0;
    if (this.voters.length > 0) {
      this.selectedVoter = this.voters[0];
    }
  }

  $onChanges(changesObj) {
    if (changesObj.voters) {
      if (angular.isDefined(this.voters)) {
        if (this.voters.length > 0) {
          this.selectedVoter = this.voters[0];
        }
      }
    }
  }
}

CandidateVoteController.$inject = ['$log'];

export const candidateVote = {
  template: require('./candidate-vote.html'),
  controller: CandidateVoteController,
  bindings: {
    voters: '<',
    onSave: '&',
    onCancel: '&'
  }
};
