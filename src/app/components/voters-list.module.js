'use strict';

import angular from 'angular';

import {votersList} from './voters-list.component.js';
import {voterAdd} from './voter-add.component.js';

export default angular.module('components.voters', [])
  .component('votersList', votersList)
  .component('voterAdd', voterAdd)
  .name;
