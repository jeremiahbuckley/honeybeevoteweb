import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import electionsList from './app/components/elections-list.module.js';
import votersList from './app/components/voters-list.module.js';
import candidatesList from './app/components/candidates-list.module.js';
import aHeader from './app/components/a-header.module.js';
import coreShared from './app/core.shared.module.js';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router', electionsList, votersList, candidatesList, coreShared, aHeader])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);

