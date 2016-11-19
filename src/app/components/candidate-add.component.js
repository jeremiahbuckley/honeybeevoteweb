/* eslint eqeqeq: "off" */
class CandidateAddController {
  constructor($log) {
    this.$log = $log;
    this.selectedElection = null;
    this.name = "";
    this.reset();
  }

  save() {
    if (this.onSave) {
      const cData = {name: this.name};
      if (this.showElectionSelect && this.selectedElection && (this.selectedElection.name !== this.noElectionChoice.name)) {
        cData.electionId = this.selectedElection._id;
      }
      this.reset();
      this.onSave({candidateData: cData});
    }
  }

  cancel() {
    this.reset();
    if (this.onCancel) {
      this.onCancel();
    }
  }

  reset() {
    this.name = "";
    if (this.showElectionSelect && this.elections) {
      if (this.elections.length > 1) {
        this.selectedElection = this.elections[1];
      } else if (this.elections.length > 0) {
        this.selectedElection = this.elections[0];
      }
    }
  }

  $onChanges(changesObj) {
    if (changesObj.elections) {
      if (this.showElectionSelect) {
        if (angular.isDefined(this.elections)) {
          if (this.elections.length > 1) {
            this.selectedElection = this.elections[1];
          } else if (this.elections.length > 0) {
            this.selectedElection = this.elections[0];
          }
        }
      }
    }
  }
}

CandidateAddController.$inject = ['$log'];

export const candidateAdd = {
  template: require('./candidate-add.html'),
  controller: CandidateAddController,
  bindings: {
    elections: '<',
    noElectionChoice: '<',
    showElectionSelect: '<',
    onSave: '&',
    onCancel: '&'
  }
};
