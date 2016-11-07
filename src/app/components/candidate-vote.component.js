class CandidateVoteController {
  constructor(CandidateVotesService, VotersService, $log) {
    this.CandidateVotesService = CandidateVotesService;
    this.VotersService = VotersService;
    this.$log = $log;
    this.selectedVoter = null;
    const self = this;
    this.voters = VotersService.query().$promise.then((result, err) => {
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
    this.$log.log(`${this.candidateId} ${this.selectedVoter._id} ${this.value}`);

    const self = this;
    this.CandidateVotesService.save({candidateId: this.candidate._id}, {voterId: this.selectedVoter._id, value: this.value})
      .$promise.then((result, err) => {
        if (err) {
          self.$log.error(err);
        } else {
          // self.$state.go("candidates");
        }
      });
  }

  cancel() {
    // this.$state.go("candidates");
  }
}

CandidateVoteController.$inject = ['CandidateVotesService', 'VotersService', '$log'];

export const candidateVote = {
  template: require('./candidate-vote.html'),
  controller: CandidateVoteController,
  bindings: {
    candidate: '<',
    onSave: '&',
    onCancel: '&'
  }
};
