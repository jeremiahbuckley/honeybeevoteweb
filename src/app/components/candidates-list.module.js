'use strict';

import angular from 'angular';

import CandidatesListController from './candidates-list.controller.js';
import {voteDetail} from './vote-detail.component.js';
import {candidateDetail} from './candidate-detail.component.js';
import {candidateAdd} from './candidate-add.component.js';

export default angular.module('components.candidates-list', [])
  .controller('CandidatesListController', CandidatesListController)
  .component('voteDetail2', voteDetail)
  .component('candidateDetail', candidateDetail)
  .component('candidateAdd', candidateAdd)
  .name;
