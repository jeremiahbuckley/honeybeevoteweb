class ElectionDetailController {
  constructor($log) {
    this.$log = $log;
    this.$log.log(this.election);
    this.showCandidatesSelectPanel = false;
  }

  delete(id) {
    return this.onDelete && this.onDelete({_id: id});
  }

  showSetCandidates() {
    this.$log.log('here');
    this.showCandidatesSelectPanel = true;
  }

  candidatesSelectOnCancel() {
    this.showCandidatesSelectPanel = false;
  }

  candidatesSelectOnSave(candidatesList) {
    if (this.onCandidatesSelectSave) {
      this.onCandidatesSelectSave({candidatesList});
    }
  }
}

ElectionDetailController.$inject = ['$log'];

export const electionDetail = {
  template: require('./election-detail.html'),
  controller: ElectionDetailController,
  bindings: {
    election: '<',
    onDelete: '&',
    onCandidatesSelectSave: '&'
  }
};
