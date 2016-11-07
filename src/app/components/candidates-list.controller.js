'use strict';

export default class CandidatesListController {
  constructor(CandidatesService, $state, $log) {
    this.CandidatesService = CandidatesService;
    this.candidates = CandidatesService.query();
    this.$state = $state;
    this.$log = $log;
    this.showAddPanel = false;
  }

  delete(_id) {
    this.CandidatesService.remove({id: _id}, () => {
      this.candidates = this.CandidatesService.query();
    });
  }

  vote(id) {
    this.$state.go("candidate-vote", {candidateId: id});
  }

  addCandidateShow() {
    this.showAddPanel = true;
  }

  addCandidateOnSave(candidateData) {
    const self = this;
    this.CandidatesService.save(candidateData).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.showAddPanel = false;
        self.candidates = self.CandidatesService.query();
      }
    });
  }

  addCandidateOnCancel() {
    this.showAddPanel = false;
  }
}

CandidatesListController.$inject = ['CandidatesService', '$state', '$log'];
