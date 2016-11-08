'use strict';

import angular from 'angular';

import ElectionsListController from './elections-list.controller.js';
import {electionAdd} from './election-add.component.js';

export default angular.module('components.elections', [])
  .controller('ElectionsListController', ElectionsListController)
  .component('electionAdd', electionAdd)
  .name;
