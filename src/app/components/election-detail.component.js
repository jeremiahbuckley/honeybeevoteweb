class ElectionDetailController {
  constructor($log) {
    this.$log = $log;
    this.showCandidatesSelectPanel = false;
  }

  delete(id) {
    return this.onDelete && this.onDelete({_id: id});
  }

  showSetCandidates() {
    this.showCandidatesSelectPanel = true;
  }

  candidatesSelectOnCancel() {
    this.showCandidatesSelectPanel = false;
  }

  candidatesSelectOnSave(cIdsList) {
    this.showCandidatesSelectPanel = false;
    if (this.onCandidatesSelectSave) {
      this.onCandidatesSelectSave({candidateIdsList: {id: this.election._id, list: cIdsList}});
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
