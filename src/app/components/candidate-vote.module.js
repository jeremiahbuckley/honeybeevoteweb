'use strict';

import angular from 'angular';

import CandidateVoteController from './candidate-vote.controller.js';

export default angular.module('components.candidateVote', [])
  .controller('CandidateVoteController', CandidateVoteController)
  .name;
