class CandidateAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
  }

  save() {
    if (this.onSave) {
      const nm = this.name;
      this.name = "";
      this.onSave({candidateData: {name: nm, value: 0}});
    }
  }

  cancel() {
    if (this.onCancel) {
      this.name = "";
      this.onCancel();
    }
  }
}

CandidateAddController.$inject = ['$log'];

export const candidateAdd = {
  template: require('./candidate-add.html'),
  controller: CandidateAddController,
  bindings: {
    onSave: '&',
    onCancel: '&'
  }
};
