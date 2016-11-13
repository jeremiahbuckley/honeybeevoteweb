'use strict';

import angular from 'angular';

import {electionsList} from './elections-list.component.js';
import {electionAdd} from './election-add.component.js';
import {electionDetail} from './election-detail.component.js';
import {electionSetCandidates} from './election-set-candidates.component.js';

export default angular.module('components.elections', [])
  .component('electionsList', electionsList)
  .component('electionAdd', electionAdd)
  .component('electionDetail', electionDetail)
  .component('electionSetCandidates', electionSetCandidates)
  .name;
