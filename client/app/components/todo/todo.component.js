import template from './todo.html';
import controller from './todo.controller';
import './todo.scss';

let todoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default todoComponent;
