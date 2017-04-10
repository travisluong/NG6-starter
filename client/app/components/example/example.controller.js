import * as CounterActions from '../../actions/counter';

class ExampleController {
  constructor($ngRedux, $scope) {
    "ngInject";
    this.name = 'example';

    const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      value: state.counter
    }
  }
}

export default ExampleController;
