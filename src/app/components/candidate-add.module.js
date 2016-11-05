'use strict';

import angular from 'angular';

import CandidateAddController from './candidate-add.controller.js';

export default angular.module('components.candidateAdd', [])
  .controller('CandidateAddController', CandidateAddController)
  .name;
