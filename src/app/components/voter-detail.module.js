'use strict';

import angular, service from 'angular';

import VoterDetailController from './voter-detail.controller.js';

export default angular.module('components.voterDetail', [service])
  .controller('VoterDetailController', VoterDetailController)
  .name;
