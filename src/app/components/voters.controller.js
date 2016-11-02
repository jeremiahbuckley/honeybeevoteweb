'use strict';

export default class ElectionsController {
  constructor($state, VotersService) {
    this.VotersService = VotersService;
    this.voters = VotersService.query();
    this.$state = $state;
  }

  delete(_id) {
    this.VotersService.remove({id: _id});
  }

  addVoter() {
    this.$state.go("voter-detail");
  }
}

ElectionsController.$inject = ['$state', 'VotersService'];
