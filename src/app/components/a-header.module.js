import angular from 'angular';

import {aHeader} from './a-header.component.js';

export default angular.module('components.a-header', [])
  .component('aHeader', aHeader)
  .name;
