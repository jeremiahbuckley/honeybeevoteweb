export default class ElectionAddController {
  constructor($log) {
    this.$log = $log;
    this.name = "";
    this.winThreshhold = 10;
    this.voteSustainDuration = 3;
    this.voterDormancyDuration = 2;
  }

  save() {
    if (this.onSave) {
      const nm = this.name;
      const wt = this.winThreshhold;
      const vsd = this.voteSustainDuration;
      const vdd = this.voterDormancyDuration;
      this.name = "";
      this.onSave({electionData: {name: nm, winThreshhold: wt, voteSustainDuration: vsd, voterDormancyDuration: vdd}});
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
