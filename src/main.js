angular.module('erpmobile', ['ionic']);

import run from './run';
import routes from './routes';


angular.module('erpmobile')
       .config(routes)
       .run(run);
