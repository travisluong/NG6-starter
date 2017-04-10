import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Example from './example/example';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Example
])

.name;

export default componentModule;
