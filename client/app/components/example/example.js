import angular from 'angular';
import uiRouter from 'angular-ui-router';
import exampleComponent from './example.component';

let exampleModule = angular.module('example', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('example', {
      url: '/example',
      component: 'example'
    });
})

.component('example', exampleComponent)

.name;

export default exampleModule;
