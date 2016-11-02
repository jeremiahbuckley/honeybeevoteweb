'use strict';

import angular from 'angular';

import VoterDetailController from './voter-detail.controller.js';

export default angular.module('components.voterDetail', [])
  .controller('VoterDetailController', VoterDetailController)
  .name;
