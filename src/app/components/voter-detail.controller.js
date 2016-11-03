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
    this.$log.log(`${this.name} ${this.password}`);

    const self = this;
    this.VotersService.save({name: this.name, password: this.password}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.$state.go("voters");
      }
    });
  }

  cancel() {
    this.$state.go("voters");
  }

}

VotersController.$inject = ['VotersService', '$log', '$state'];
