class VoterAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
    this.password = "";
  }

  save() {
    if (this.onSave) {
      const nm = this.name;
      const pw = this.password;
      this.name = "";
      this.password = "";
      this.onSave({voterData: {name: nm, password: pw}});
    }
  }

  cancel() {
    if (this.onCancel) {
      this.name = "";
      this.password = "";
      this.onCancel();
    }
  }
}

VoterAddController.$inject = ['$log'];

export const voterAdd = {
  template: require('./voter-add.html'),
  controller: VoterAddController,
  bindings: {
    onSave: '&',
    onCancel: '&'
  }
};
