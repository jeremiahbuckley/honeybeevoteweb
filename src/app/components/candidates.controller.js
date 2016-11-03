'use strict';

export default class ElectionsController {
  constructor(CandidatesService, $state) {
    this.CandidatesService = CandidatesService;
    this.candidates = CandidatesService.query();
    this.$state = $state;
  }

  delete(_id) {
    this.CandidatesService.remove({id: _id}, () => {
      this.candidates = this.CandidatesService.query();
    });
  }

  addCandidate() {
    this.$state.go("candidate-detail");
  }}

ElectionsController.$inject = ['CandidatesService', '$state'];
