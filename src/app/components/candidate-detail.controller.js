'use strict';

export default class CandidateDetailController {
  constructor(CandidatesService, $log, $state) {
    this.CandidatesService = CandidatesService;
    this.$log = $log;
    this.$state = $state;
    this.candidates = CandidatesService.query();
    this.name = "";
  }

  save() {
    this.$log.log(`${this.name}`);

    const self = this;
    this.CandidatesService.save({name: this.name, value: 0}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.$state.go("candidates");
      }
    });
  }

  cancel() {
    this.$state.go("candidates");
  }
}

CandidateDetailController.$inject = ['CandidatesService', '$log', '$state'];
