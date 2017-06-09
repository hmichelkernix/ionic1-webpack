
var templateUrl = {
  main: require('./html/main.html')
};

export default function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: templateUrl.main
    });
  $urlRouterProvider.otherwise('/');

}
