'use strict';

export default class CandidateVoteController {
  constructor(CandidatesService, CandidateVotesService, VotersService, $log, $state, $stateParams) {
    this.CandidatesService = CandidatesService;
    this.CandidateVotesService = CandidateVotesService;
    this.VotersService = VotersService;
    this.$log = $log;
    this.$state = $state;
    this.voters = VotersService.query();
    this.name = "";
    this.selectedVoter = 0;
    this.candidateId = $stateParams.candidateId;

    if ($stateParams.candidateId === null) {
      this.$log.error("No candidate id!");
    } else {
      const self = this;
      CandidatesService.get({id: $stateParams.candidateId}, result => {
        self.candidate = result;
        self.candidateName = result.name;
        self.votes = result.votes;
      });
    }
    this.value = 0;
  }

  save() {
    this.$log.log(`${this.candidateId} ${this.selectedVoter._id} ${this.value}`);

    const self = this;
    this.CandidateVotesService.save({candidateId: this.candidateId}, {voterId: this.selectedVoter._id, value: this.value})
      .$promise.then((result, err) => {
        if (err) {
          self.$log.error(err);
        } else {
          self.$state.go("candidates");
        }
      });
  }

  cancel() {
    this.$state.go("candidates");
  }
}

CandidateVoteController.$inject = ['CandidatesService', 'CandidateVotesService', 'VotersService', '$log', '$state', '$stateParams'];
