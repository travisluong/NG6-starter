import * as TodoActions from '../../actions/todo';

class TodoController {
  constructor($ngRedux, $scope) {
    "ngInject";
    this.name = 'todo';

    const unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
    $scope.$on('$destroy', unsubscribe)
  }

  mapStateToThis(state) {
    return {
      todos: state.todo.list,
      newTodo: ''
    }
  }
}

export default TodoController;
