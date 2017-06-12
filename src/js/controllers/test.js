export default class Test {

  constructor(Api, $scope) {
    $scope.things = Api.getThings();
  }

  static factory(Api, $scope) {
    return new Test(Api, $scope);
  }

}

