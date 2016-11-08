class CandidateAddController {
  constructor(ElectionsService, $log) {
    this.ElectionsService = ElectionsService;
    this.$log = $log;
    this.selectedElection = null;
    const self = this;
    this.elections = this.ElectionsService.query().$promise.then((result, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        self.elections = result;
        if (self.elections.length > 0) {
          self.selectedElection = self.elections[0];
        }
      }});
    this.name = "";
  }

  save() {
    if (this.onSave) {
      const nm = this.name;
      const eId = this.selectedElection._id;
      this.reset();
      this.onSave({candidateData: {name: nm, value: 0, electionId: eId}});
    }
  }

  cancel() {
    if (this.onCancel) {
      this.reset();
      this.onCancel();
    }
  }

  reset() {
    this.name = "";
    const self = this;
    this.elections = this.ElectionsService.query().$promise.then((result, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        self.elections = result;
        if (self.elections.length > 0) {
          self.selectedElection = self.elections[0];
        }
      }});
  }
}

CandidateAddController.$inject = ['ElectionsService', '$log'];

export const candidateAdd = {
  template: require('./candidate-add.html'),
  controller: CandidateAddController,
  bindings: {
    onSave: '&',
    onCancel: '&'
  }
};
