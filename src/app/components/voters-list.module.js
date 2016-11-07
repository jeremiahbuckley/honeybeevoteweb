'use strict';

import angular from 'angular';

import VotersListController from './voters-list.controller.js';

export default angular.module('components.voters', [])
  .controller('VotersListController', VotersListController)
  .name;
