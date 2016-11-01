'use strict';

export default class VotersController {
  constructor(VotersService, $log) {
    this.VotersService = VotersService;
    this.log = $log;
    this.voters = VotersService.query();
    this.name = "";
    this.password = "";
  }

  save() {
    this.log('{this.name} {this.password}');
    this.VotersService.save({name: this.name, password: this.password});
  }

}

ElectionsController.$inject = ['VotersService', '$log'];
