export default class ElectionAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
    this.winThreshhold = 10;
    this.voteSustainDuration = 3;
    this.voterDormancyDuration = 2;
    this.reset();
  }

  save() {
    const nm = this.name;
    const wt = this.winThreshhold;
    const vsd = this.voteSustainDuration;
    const vdd = this.voterDormancyDuration;
    this.reset();

    if (this.onSave) {
      this.onSave({electionData: {name: nm, winThreshhold: wt, voteSustainDuration: vsd, voterDormancyDuration: vdd}});
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
    this.winThreshhold = 10;
    this.voteSustainDuration = 3;
    this.voterDormancyDuration = 2;
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
