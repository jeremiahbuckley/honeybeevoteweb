class AHeaderController {
  constructor($log) {
    this.$log = $log;
    this.onElections = true;
    this.onCandidates = false;
    this.onVoters = false;
  }

  onClick(navItem) {
    this.$log.log(navItem);
    if (navItem === "elections") {
      this.onElections = true;
      this.onCandidates = false;
      this.onVoters = false;
    } else if (navItem === "candidates") {
      this.onElections = false;
      this.onCandidates = true;
      this.onVoters = false;
    } else if (navItem === "voters") {
      this.onElections = false;
      this.onCandidates = false;
      this.onVoters = true;
    }
  }
}

AHeaderController.$inject = ['$log'];

export const aHeader = {
  template: require('./a-header.html'),
  controller: AHeaderController,
  bindings: {
  }
};
