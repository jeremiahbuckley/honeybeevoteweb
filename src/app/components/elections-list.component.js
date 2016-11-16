class ElectionsListController {
  constructor(ElectionsService, ElectionsCandidatesService, CandidateElectionsService, $state, $log) {
    this.ElectionsService = ElectionsService;
    this.ElectionsCandidatesService = ElectionsCandidatesService;
    this.CandidateElectionsService = CandidateElectionsService;
    this.elections = ElectionsService.query();
    this.$state = $state;
    this.$log = $log;
    this.showAddPanel = false;
  }

  delete(_id) {
    this.ElectionsService.remove({id: _id}, () => {
      this.elections = this.ElectionsService.query();
    });
  }

  addElection() {
    this.showAddPanel = true;
  }

  addElectionOnSave(electionData) {
    const self = this;
    this.ElectionsService.save({name: electionData.name}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.showAddPanel = false;
        self.elections = self.ElectionsService.query();
      }
    });
  }

  addElectionOnCancel() {
    this.showAddPanel = false;
  }

  saveCandidatesSelection(cIds) {
    cIds.list.forEach(candidateId => {
      if (candidateId.selected) {
        this.ElectionsCandidatesService.save({id: cIds.id}, {candidateId: candidateId.id}).$promise.then(
          () => {
            this.CandidateElectionsService.save({candidateId: candidateId.id}, {electionId: cIds.id});
          });
      } else {
        this.ElectionsCandidatesService.remove({id: cIds.id, candidateid: candidateId.id}).$promise.then(
          () => {
            this.CandidateElectionsService.remove({candidateId: candidateId.id, id: cIds.id});
          });
      }
    });
  }
}

ElectionsListController.$inject = ['ElectionsService', 'ElectionsCandidatesService', 'CandidateElectionsService', '$state', '$log'];

export const electionsList = {
  template: require('./elections-list.html'),
  controller: ElectionsListController
};
