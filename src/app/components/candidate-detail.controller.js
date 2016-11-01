'use strict';

export default class ElectionsController {
  constructor(CandidatesService) {
    this.CandidatesService = CandidatesService;
    this.candidates = CandidatesService.query();
  }
}

ElectionsController.$inject = ['CandidatesService'];
