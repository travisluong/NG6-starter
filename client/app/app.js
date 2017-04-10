import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import reducers from './reducers';
import { combineReducers } from 'redux';
// import loggingMiddleware from './loggingMiddleware';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngRedux
  ])
  .config(($locationProvider, $ngReduxProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    // let reducer = combineReducers(reducers);

    $ngReduxProvider.createStoreWith(reducers, [thunk], [devToolsEnhancer()]);
  })

  .component('app', AppComponent);
