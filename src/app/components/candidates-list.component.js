class CandidatesListController {
  constructor(CandidatesService, CandidatesListService, CandidateElectionsService, CandidateVotesService, ElectionsCandidatesService, $state, $log) {
    this.CandidatesService = CandidatesService;
    this.CandidatesListService = CandidatesListService;
    this.CandidateElectionsService = CandidateElectionsService;
    this.CandidateVotesService = CandidateVotesService;
    this.ElectionsCandidatesService = ElectionsCandidatesService;
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
    this.CandidatesService.saveText({name: candidateData.name}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        const cId = result.content.substring('/candidates/'.length);
        if (candidateData.electionId) {
          this.CandidateElectionsService.save({candidateId: cId}, {electionId: candidateData.electionId}).$promise.then((result, err) => {
            if (err) {
              self.$log.error(err);
            } else {
              this.ElectionsCandidatesService.save({id: candidateData.electionId}, {candidateId: cId}).$promise.then((result, err) => {
                if (err) {
                  self.$log.error(err);
                } else {
                  self.showAddPanel = false;
                  self.candidates = self.CandidatesService.query();
                }
              });
            }
          });
        } else {
          self.showAddPanel = false;
          self.candidates = self.CandidatesService.query();
        }
      }
    });
  }

  addCandidateOnCancel() {
    this.showAddPanel = false;
  }

  saveVote(voteData) {
    const self = this;
    this.CandidateVotesService.save({candidateId: voteData.candidateId, electionId: voteData.electionId}, {voterId: voteData.voterId, value: voteData.value})
      .$promise.then((result, err) => {
        if (err) {
          self.$log.error(err);
        } else {
          self.candidates = self.CandidatesService.query();
        }
      });
  }
}

CandidatesListController.$inject = ['CandidatesService', 'CandidatesListService', 'CandidateElectionsService', 'CandidateVotesService', 'ElectionsCandidatesService', '$state', '$log'];

export const candidatesList = {
  template: require('./candidates-list.html'),
  controller: CandidatesListController,
  bindings: {
    candidatesInElection: '<'
  }
};
