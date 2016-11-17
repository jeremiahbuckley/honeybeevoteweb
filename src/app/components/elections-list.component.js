class ElectionsListController {
  constructor(ElectionsService, ElectionsCandidatesService, CandidateElectionsService, CandidatesService, $state, $log) {
    this.ElectionsService = ElectionsService;
    this.ElectionsCandidatesService = ElectionsCandidatesService;
    this.CandidateElectionsService = CandidateElectionsService;
    this.CandidatesService = CandidatesService;
    const self = this;
    this.candidates = CandidatesService.query().$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.candidates = result;
      }
    });
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
    this.ElectionsService.save(electionData).$promise.then((result, err) => {
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
    const self = this;
    cIds.list.forEach(candidateId => {
      if (candidateId.selected) {
        this.ElectionsCandidatesService.save({id: cIds.id}, {candidateId: candidateId.id}).$promise.then(
          () => {
            self.CandidateElectionsService.save({candidateId: candidateId.id}, {electionId: cIds.id}).$promise.then(
              () => {
                self.CandidatesService.query().$promise.then((result, err) => {
                  if (err) {
                    self.$log(err);
                  } else {
                    self.candidates = result;
                    this.elections = self.ElectionsService.query();
                  }
                });
              });
          });
      } else {
        this.ElectionsCandidatesService.remove({id: cIds.id, candidateId: candidateId.id}).$promise.then(
          () => {
            self.CandidateElectionsService.remove({candidateId: candidateId.id, id: cIds.id}).$promise.then(
              () => {
                self.CandidatesService.query().$promise.then((result, err) => {
                  if (err) {
                    self.$log(err);
                  } else {
                    self.candidates = result;
                    this.elections = self.ElectionsService.query();
                  }
                });
              });
          });
      }
    });
  }
}

ElectionsListController.$inject = ['ElectionsService', 'ElectionsCandidatesService', 'CandidateElectionsService', 'CandidatesService', '$state', '$log'];

export const electionsList = {
  template: require('./elections-list.html'),
  controller: ElectionsListController
};
