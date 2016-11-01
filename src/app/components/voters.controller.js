'use strict';

export default class ElectionsController {
  constructor(VotersService) {
    this.VotersService = VotersService;
    this.voters = VotersService.query();
  }
}

ElectionsController.$inject = ['VotersService'];
