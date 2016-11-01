'use strict';

import angular from 'angular';

import CandidatesController from './candidates.controller.js';

export default angular.module('components.candidates', [])
  .controller('CandidatesController', CandidatesController)
  .name;
