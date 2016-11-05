'use strict';

import angular from 'angular';

import CandidateVoteController from './candidate-vote.controller.js';
import {voteDetail} from './vote-detail.component.js';

export default angular.module('components.candidateVote', [])
  .controller('CandidateVoteController', CandidateVoteController)
  .component('voteDetail', voteDetail)
  .name;
