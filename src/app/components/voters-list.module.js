'use strict';

import angular from 'angular';

import VotersListController from './voters-list.controller.js';
import {voterAdd} from './voter-add.component.js';

export default angular.module('components.voters', [])
  .controller('VotersListController', VotersListController)
  .component('voterAdd', voterAdd)
  .name;
