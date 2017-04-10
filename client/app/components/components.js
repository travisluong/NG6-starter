import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Example from './example/example';
import Todo from './todo/todo';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Example,
  Todo
])

.name;

export default componentModule;
