export default class ElectionSetCandidatesController {
  constructor(CandidatesService, $log) {
    this.CandidatesService = CandidatesService;
    this.$log = $log;
    this.candidates = [];
    this.reset();
  }

  save() {
    if (this.onSave) {
      const cIds = [];
      this.candidates.forEach(candidate => {
        cIds.push({id: candidate._id.toString(), selected: candidate.selected});
      });
      this.reset();
      this.onSave({candidateIdsList: cIds});
    }
  }

  cancel() {
    if (this.onCancel) {
      this.reset();
      this.onCancel();
    }
  }

  reset() {
    const self = this;
    this.CandidatesService.query().$promise.then((result, error) => {
      if (error) {
        self.$log.log(error);
      } else {
        self.candidates = result;
        self.candidates.forEach(candidate => {
          candidate.selected = false;
          self.candidateIds.forEach(id => {
            if (id === candidate._id) {
              candidate.selected = true;
            }
          });
        });
      }
    });
  }
}

ElectionSetCandidatesController.$inject = ['CandidatesService', '$log'];

export const electionSetCandidates = {
  template: require('./election-set-candidates.html'),
  controller: ElectionSetCandidatesController,
  bindings: {
    candidateIds: '<',
    onSave: '&',
    onCancel: '&'
  }
};
