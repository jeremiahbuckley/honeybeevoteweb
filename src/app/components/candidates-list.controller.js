'use strict';

export default class CandidatesListController {
  constructor(CandidatesService, $state) {
    this.CandidatesService = CandidatesService;
    this.candidates = CandidatesService.query();
    this.$state = $state;
  }

  delete(_id) {
    this.CandidatesService.remove({id: _id}, () => {
      this.candidates = this.CandidatesService.query();
    });
  }

  addCandidate() {
    this.$state.go("candidate-detail");
  }

  vote(id) {
    this.$state.go("candidate-vote", {candidateId: id});
  }
}

CandidatesListController.$inject = ['CandidatesService', '$state'];