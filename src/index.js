import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import elections from './app/components/elections.module.js';
import voters from './app/components/voters.module.js';
import candidates from './app/components/candidates.module.js';
import voterDetail from './app/components/voter-detail.module.js';
import candidateDetail from './app/components/candidate-detail.module.js';
import coreShared from './app/core.shared.module.js';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router', elections, voters, candidates, voterDetail, candidateDetail, coreShared])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);

