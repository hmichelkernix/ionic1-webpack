
var templateUrl = {
  main: require('./html/main.html'),
  test: require('./html/test.html')
};

export default function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: templateUrl.main
    })
    .state('test', {
      url: '/test',
      templateUrl: templateUrl.test,
      controller: "TestController"
    });
  $urlRouterProvider.otherwise('/');

}
