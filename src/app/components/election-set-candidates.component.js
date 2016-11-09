export default class ElectionSetCandidatesController {
  constructor($log) {
    this.$log = $log;
    this.$log.log('herer 2');
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
    this.$log.log("election-set-candidates done!");
    if (this.onCancel) {
      this.reset();
      this.onCancel();
    }
  }
}

ElectionSetCandidatesController.$inject = ['$log'];

export const electionSetCandidates = {
  template: require('./election-set-candidates.html'),
  controller: ElectionSetCandidatesController,
  bindings: {
    candidateIds: '<',
    onSave: '&',
    onCancel: '&'
  }
};
