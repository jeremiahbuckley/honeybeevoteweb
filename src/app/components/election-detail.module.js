'use strict';

import angular from 'angular';

import ElectionDetailController from './election-detail.controller.js';

export default angular.module('components.electionDetail', [])
  .controller('ElectionDetailController', ElectionDetailController)
  .name;
