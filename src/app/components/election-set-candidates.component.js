export default class ElectionSetCandidatesController {
  constructor($log) {
    this.$log = $log;
    this.localCandidates = this.createLocalStateCandidates(this.candidates);
    this.reset();
  }

  save() {
    if (this.onSave) {
      const cIds = [];
      this.localCandidates.forEach(candidate => {
        cIds.push({id: candidate._id.toString(), selected: candidate.selected});
      });
      this.reset();
      this.onSave({candidateIdsList: cIds});
    }
  }

  cancel() {
    this.reset();
    if (this.onCancel) {
      this.onCancel();
    }
  }

  // need this because Candidates collection is shared across multiple sub-controllers.
  // need local state copy for this controller
  createLocalStateCandidates(candidates) {
    const c = [];
    candidates.forEach(candidate => {
      const newC = {};
      newC._id = candidate._id;
      newC.name = candidate.name;
      newC.selected = false;
      c.push(newC);
    });
    return c;
  }

  reset() {
    this.localCandidates.forEach(candidate => {
      candidate.selected = false;
      this.candidateIds.forEach(id => {
        if (id === candidate._id) {
          candidate.selected = true;
        }
      });
    });
  }

  $onChanges(changesObj) {
    if (changesObj.candidates) {
      this.localCandidates = this.createLocalStateCandidates(this.candidates);

      this.localCandidates.forEach(candidate => {
        candidate.selected = false;
        this.candidateIds.forEach(id => {
          if (id === candidate._id) {
            candidate.selected = true;
          }
        });
      });
    }
  }
}

ElectionSetCandidatesController.$inject = ['$log'];

export const electionSetCandidates = {
  template: require('./election-set-candidates.html'),
  controller: ElectionSetCandidatesController,
  bindings: {
    candidates: '<',
    candidateIds: '<',
    onSave: '&',
    onCancel: '&'
  }
};
