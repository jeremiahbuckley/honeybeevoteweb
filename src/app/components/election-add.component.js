export default class ElectionAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
  }

  save() {
    if (this.onSave) {
      const nm = this.name;
      this.name = "";
      this.onSave({electionData: {name: nm}});
    }
  }

  cancel() {
    if (this.onCancel) {
      this.name = "";
      this.onCancel();
    }
  }
}

ElectionAddController.$inject = ['$log'];

export const electionAdd = {
  template: require('./election-add.html'),
  controller: ElectionAddController,
  bindings: {
    onSave: '&',
    onCancel: '&'
  }
};
