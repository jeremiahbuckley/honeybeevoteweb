'use strict';

import angular from 'angular';

import CandidatesListController from './candidates-list.controller.js';
import {voteDetail} from './vote-detail.component.js';
import {candidateDetail} from './candidate-detail.component.js';
import {candidateAdd} from './candidate-add.component.js';
import {candidateVote} from './candidate-vote.component.js';

let x = candidateVote;
const y = x;
x = y;

export default angular.module('components.candidates-list', [])
  .controller('CandidatesListController', CandidatesListController)
  .component('voteDetail', voteDetail)
  .component('candidateDetail', candidateDetail)
  .component('candidateAdd', candidateAdd)
  .component('candidateVote', candidateVote)
  .name;
