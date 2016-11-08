'use strict';

import angular from 'angular';

import CandidatesListController from './candidates-list.controller.js';
import {candidateVotesList} from './candidate-votes-list.component.js';
import {candidateDetail} from './candidate-detail.component.js';
import {candidateAdd} from './candidate-add.component.js';
import {candidateVote} from './candidate-vote.component.js';

export default angular.module('components.candidates-list', [])
  .controller('CandidatesListController', CandidatesListController)
  .component('candidateVotesList', candidateVotesList)
  .component('candidateDetail', candidateDetail)
  .component('candidateAdd', candidateAdd)
  .component('candidateVote', candidateVote)
  .name;
