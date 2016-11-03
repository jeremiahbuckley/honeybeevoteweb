'use strict';

export default class ElectionDetailController {
  constructor(ElectionsService, $log, $state) {
    this.ElectionsService = ElectionsService;
    this.$log = $log;
    this.$state = $state;
    this.elections = ElectionsService.query();
    this.name = "";
  }

  save() {
    this.$log.log(`${this.name}`);

    const self = this;
    this.ElectionsService.save({name: this.name}).$promise.then((result, err) => {
      if (err) {
        self.$log.error(err);
      } else {
        self.$state.go("elections");
      }
    });
  }

  cancel() {
    this.$state.go("elections");
  }
}

ElectionDetailController.$inject = ['ElectionsService', '$log', '$state'];
