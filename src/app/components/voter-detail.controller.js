'use strict';

export default class VotersController {
  constructor(VotersService, $log, $state) {
    this.VotersService = VotersService;
    this.$log = $log;
    this.$state = $state;
    this.voters = VotersService.query();
    this.name = "";
    this.password = "";
  }

  save() {
    this.$log.log('{this.name} {this.password}');
    this.VotersService.save({name: this.name, password: this.password});
    this.$state.go("voters");
  }

  cancel() {
    this.$state.go("voters");
  }

}

VotersController.$inject = ['VotersService', '$log', '$state'];
