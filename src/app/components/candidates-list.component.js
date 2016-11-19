class CandidatesListController {
  constructor(CandidatesService, CandidatesListService, CandidateElectionsService, CandidateVotesService, ElectionsCandidatesService, ElectionsService, VotersService, $state, $log) {
    this.CandidatesService = CandidatesService;
    this.CandidatesListService = CandidatesListService;
    this.CandidateElectionsService = CandidateElectionsService;
    this.CandidateVotesService = CandidateVotesService;
    this.ElectionsService = ElectionsService;
    this.ElectionsCandidatesService = ElectionsCandidatesService;
    this.VotersService = VotersService;
    this.$state = $state;
    this.$log = $log;
    this.candidates = [];
    if (this.candidatesInElection) {
      this.candidates = CandidatesListService.getList(this.candidatesInElection);
    } else {
      this.candidates = CandidatesService.query();
    }
    const self = this;
    this.voters = this.VotersService.query().$promise.then((voters, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        this.voters = voters;
      }
    });
    this.noElectionChoice = {name: "Don't assign election", _id: "-1"};
    this.elections = this.ElectionsService.query().$promise.then((electionsList, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        electionsList.splice(0, 0, this.noElectionChoice); // add a no-election option.
        self.elections = electionsList;
      }});
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

  addCandidateElections() {
    return (angular.isUndefined(this.electionId));
  }

  addCandidateOnSave(candidateData) {
    const self = this;
    this.CandidatesService.saveText({name: candidateData.name}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        const cId = result.content.substring('/candidates/'.length);
        let eId = this.electionId;
        if (this.addCandidateElections()) {
          eId = candidateData.electionId;
        }
        if (eId) {
          this.CandidateElectionsService.save({candidateId: cId}, {electionId: eId}).$promise.then((result, err) => {
            if (err) {
              self.$log.error(err);
            } else {
              this.ElectionsCandidatesService.save({id: eId}, {candidateId: cId}).$promise.then((result, err) => {
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

CandidatesListController.$inject = ['CandidatesService', 'CandidatesListService', 'CandidateElectionsService', 'CandidateVotesService', 'ElectionsCandidatesService', 'ElectionsService', 'VotersService', '$state', '$log'];

export const candidatesList = {
  template: require('./candidates-list.html'),
  controller: CandidatesListController,
  bindings: {
    candidatesInElection: '<',
    electionId: '<'
  }
};
