class CandidatesListController {
  constructor(CandidatesService, CandidatesListService, CandidateVotesService, $state, $log) {
    this.CandidatesService = CandidatesService;
    this.CandidatesListService = CandidatesListService;
    this.CandidateVotesService = CandidateVotesService;
    this.$state = $state;
    this.$log = $log;
    this.candidates = [];
    this.$log.log(this.candidatesInElection);
    if (this.candidatesInElection) {
      this.candidates = CandidatesListService.getList(this.candidatesInElection);
    } else {
      this.candidates = CandidatesService.query();
    }
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
    this.CandidateVotesService.save({candidateId: voteData.candidateId}, {voterId: voteData.voterId, electionId: voteData.electionId, value: voteData.value})
      .$promise.then((result, err) => {
        if (err) {
          self.$log.error(err);
        } else {
          self.candidates = self.CandidatesService.query();
        }
      });
  }
}

CandidatesListController.$inject = ['CandidatesService', 'CandidatesListService', 'CandidateVotesService', '$state', '$log'];

export const candidatesList = {
  template: require('./candidates-list.html'),
  controller: CandidatesListController,
  bindings: {
    candidatesInElection: '<'
  }
};
