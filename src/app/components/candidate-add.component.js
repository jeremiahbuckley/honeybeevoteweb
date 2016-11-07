class CandidateAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
  }

  save() {
    const nm = this.name;
    this.name = "";
    this.onSave({candidateData: {name: nm, value: 0}});
  }

  cancel() {
    this.name = "";
    this.onCancel();
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
