import {EntrypointParams} from '@vizir-banking/banking-app-core/dist/utils/entrypoint-params';

// this is the only place where is allowed skip the no-default-export rule
// eslint-disable-next-line import/no-default-export
export default ({
  routesManager: _routesManager,
  translationsManager: _translationsManager,
  homeManager: _homeManager,
  reduxManager: _reduxManager,
  env: _env,
}: EntrypointParams): void => {};
