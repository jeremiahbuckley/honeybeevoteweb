/* eslint eqeqeq: "off" */
class CandidateAddController {
  constructor(ElectionsService, $log) {
    this.ElectionsService = ElectionsService;
    this.$log = $log;
    this.selectedElection = null;
    this.noElectionChoice = {name: "Don't assign election", _id: "-1"};
    const self = this;
    this.elections = this.ElectionsService.query().$promise.then((electionsList, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        electionsList.splice(0, 0, this.noElectionChoice); // add a no-election option.
        self.elections = electionsList;
        if (self.elections.length > 1) {
          self.selectedElection = self.elections[1];
        }
      }});
    this.name = "";
  }

  save() {
    if (this.onSave) {
      const cData = {name: this.name, value: 0};
      if (this.selectedElection && (this.selectedElection.name !== this.noElectionChoice.name)) {
        cData.electionId = this.selectedElection._id;
      }
      this.reset();
      this.onSave({candidateData: cData});
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
    this.elections = this.ElectionsService.query().$promise.then((electionsList, err) => {
      if (err) {
        self.$log.log(err);
      } else {
        electionsList.splice(0, 0, this.noElectionChoice); // add a no-election option.
        self.elections = electionsList;
        if (self.elections.length > 1) {
          self.selectedElection = self.elections[1];
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
