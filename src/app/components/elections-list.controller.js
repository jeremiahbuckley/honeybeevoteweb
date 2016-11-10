'use strict';

export default class ElectionsList {
  constructor(ElectionsService, ElectionsCandidatesService, $state, $log) {
    this.ElectionsService = ElectionsService;
    this.ElectionsCandidatesService = ElectionsCandidatesService;
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
    cIds.list.forEach(cId => {
      if (cId.selected) {
        this.ElectionsCandidatesService.save({id: cIds.id, candidateid: cId.id});
      } else {
        this.ElectionsCandidatesService.remove({id: cIds.id, candidateid: cId.id});
      }
    });
  }
}

ElectionsList.$inject = ['ElectionsService', 'ElectionsCandidatesService', '$state', '$log'];
