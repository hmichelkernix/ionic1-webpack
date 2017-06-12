angular.module('erpmobile', ['ionic']);

import run from './run';
import routes from './routes';

import TestController from './js/controllers/test';

import ApiService from './js/services/Api';

angular.module('erpmobile')
       .config(routes)
       .run(run)
       .service('Api', ApiService)
       .controller('TestController', TestController.factory);
