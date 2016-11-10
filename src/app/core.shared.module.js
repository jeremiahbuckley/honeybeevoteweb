'use strict';

'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import CandidatesService from './services/candidates.js';
import CandidateVotesService from './services/candidateVotes.js';
import ElectionsService from './services/elections.js';
import ElectionsCandidatesService from './services/electionsCandidates.js';
import VotersService from './services/voters.js';

export default angular.module('core.shared', [uirouter, ngResource])
  .service('CandidatesService', CandidatesService)
  .service('CandidateVotesService', CandidateVotesService)
  .service('ElectionsService', ElectionsService)
  .service('ElectionsCandidatesService', ElectionsCandidatesService)
  .service('VotersService', VotersService)
  .name;

// angular.module('core.shared2', ['ngResource']);
