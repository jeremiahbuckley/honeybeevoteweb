'use strict';

import angular from 'angular';

import ElectionsController from './elections.controller.js';

export default angular.module('components.elections', [])
  .controller('ElectionsController', ElectionsController)
  .name;
