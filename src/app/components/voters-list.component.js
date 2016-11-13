class VotersListController {
  constructor($state, VotersService) {
    this.VotersService = VotersService;
    this.voters = VotersService.query();
    this.$state = $state;
    this.showAddPanel = false;
  }

  delete(_id) {
    this.VotersService.remove({id: _id}, () => {
      this.voters = this.VotersService.query();
    });
  }

  addVoter() {
    this.showAddPanel = true;
  }

  addVoterOnSave(candidateData) {
    const self = this;
    this.VotersService.save({name: candidateData.name, password: candidateData.password}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.showAddPanel = false;
        self.voters = self.VotersService.query();
      }
    });
  }

  addVoterOnCancel() {
    this.showAddPanel = false;
  }
}

VotersListController.$inject = ['$state', 'VotersService'];

export const votersList = {
  template: require('./voters-list.html'),
  controller: VotersListController
};
