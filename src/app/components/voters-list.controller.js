'use strict';

export default class VotersListController {
  constructor($state, VotersService) {
    this.VotersService = VotersService;
    this.voters = VotersService.query();
    this.$state = $state;
  }

  delete(_id) {
    this.VotersService.remove({id: _id}, () => {
      this.voters = this.VotersService.query();
    });
  }

  addVoter() {
    this.$state.go("voter-detail");
  }
}

VotersListController.$inject = ['$state', 'VotersService'];