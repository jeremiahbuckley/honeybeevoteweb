'use strict';

'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import CandidatesService from './services/candidates.js';
import ElectionsService from './services/elections.js';
import VotersService from './services/voters.js';

export default angular.module('core.shared', [uirouter, ngResource])
  .service('CandidatesService', CandidatesService)
  .service('ElectionsService', ElectionsService)
  .service('VotersService', VotersService)
  .name;

// angular.module('core.shared2', ['ngResource']);
