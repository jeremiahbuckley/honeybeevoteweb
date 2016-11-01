'use strict';

import angular from 'angular';

import CandidateDetailController from './candidate-detail.controller.js';

export default angular.module('components.candidateDetail', [])
  .controller('CandidateDetailController', CandidateDetailController)
  .name;
