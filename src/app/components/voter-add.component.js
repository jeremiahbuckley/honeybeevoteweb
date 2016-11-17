class VoterAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
    this.password = "";
    this.reset();
  }

  save() {
    const nm = this.name;
    const pw = this.password;
    this.reset();
    if (this.onSave) {
      this.onSave({voterData: {name: nm, password: pw}});
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
    this.password = "";
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
