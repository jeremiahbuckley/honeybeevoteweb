'use strict';

export default class ElectionsList {
  constructor(ElectionsService, $state, $log) {
    this.ElectionsService = ElectionsService;
    this.elections = ElectionsService.query();
    this.$state = $state;
    this.$log = $log;
    this.showAddPanel = false;
    this.$log.log('loaded ElectionsList');
    this.$log.log(this.elections);
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
}

ElectionsList.$inject = ['ElectionsService', '$state', '$log'];
