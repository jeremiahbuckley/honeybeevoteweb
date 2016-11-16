class CandidateVoteController {
  constructor(VotersService, $log) {
    this.VotersService = VotersService;
    this.$log = $log;
    this.selectedVoter = null;
    const self = this;
    this.voters = this.VotersService.query().$promise.then((result, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        self.voters = result;
        if (self.voters.length > 0) {
          self.selectedVoter = self.voters[0];
        }
      }});
    this.value = 0;
  }

  save() {
    if (this.onSave) {
      this.onSave({voteData: {voterId: this.selectedVoter._id, value: this.value}});
    }
    this.reset();
  }

  cancel() {
    if (this.onCancel) {
      this.onCancel();
    }
    this.reset();
  }

  reset() {
    this.value = 0;
    const self = this;
    this.voters = this.VotersService.query().$promise.then((result, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        self.voters = result;
        if (self.voters.length > 0) {
          self.selectedVoter = self.voters[0];
        }
      }});
  }
}

CandidateVoteController.$inject = ['VotersService', '$log'];

export const candidateVote = {
  template: require('./candidate-vote.html'),
  controller: CandidateVoteController,
  bindings: {
    onSave: '&',
    onCancel: '&'
  }
};
