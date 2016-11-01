'use strict';

export default class ElectionsController {
  constructor(ElectionsService, VotersService, CandidatesService) {
    this.name = 'World';
    this.jbtest = "112";
    this.ElectionsService = ElectionsService;
    this.elections = ElectionsService.query();
    this.voters = VotersService.query();
    this.candidates = CandidatesService.query();
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

ElectionsController.$inject = ['ElectionsService', 'VotersService', 'CandidatesService'];
