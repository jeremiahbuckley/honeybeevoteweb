'use strict';

export default class ElectionsController {
  constructor(ElectionsService, $state) {
    this.ElectionsService = ElectionsService;
    this.elections = ElectionsService.query();
    this.$state = $state;
  }

  delete(_id) {
    this.ElectionsService.remove({id: _id}, () => {
      this.elections = this.ElectionsService.query();
    });
  }

  addCandidate() {
    this.$state.go("election-detail");
  }
}

ElectionsController.$inject = ['ElectionsService', '$state'];
