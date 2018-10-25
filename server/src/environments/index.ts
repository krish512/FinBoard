const environment = process.env.NODE_ENV || 'local';

import envLocal from './local';
import envDevelopment from './development';
import envProduction from './production';

let env;

switch (environment) {
    case 'production':
        env = envProduction;
        break;
    case 'developnment':
        env = envDevelopment;
        break;
    default:
        env = envLocal;
        break;
}

export default env;