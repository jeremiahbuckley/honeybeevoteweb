'use strict';

import angular from 'angular';

import VotersController from './voters.controller.js';

export default angular.module('components.voters', [])
  .controller('VotersController', VotersController)
  .name;
