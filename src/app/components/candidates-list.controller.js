'use strict';

export default class CandidatesListController {
  constructor(CandidatesService, CandidateVotesService, $state, $log) {
    this.CandidatesService = CandidatesService;
    this.CandidateVotesService = CandidateVotesService;
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

  saveVote(voteData) {
    const self = this;
    this.CandidateVotesService.save({candidateId: voteData.candidateId}, {voterId: voteData.voterId, value: voteData.value})
      .$promise.then((result, err) => {
        if (err) {
          self.$log.error(err);
        } else {
          self.candidates = self.CandidatesService.query();
        }
      });
  }
}

CandidatesListController.$inject = ['CandidatesService', 'CandidateVotesService', '$state', '$log'];
