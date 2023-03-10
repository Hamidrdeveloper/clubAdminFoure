import { DefinePlugin } from 'webpack';

import { baseUrl, isDev, isDevServer, isProd, mode } from '../utils/env';

const config = {
  'process.env': {
    NODE_ENV: JSON.stringify(mode),
    BASE_URL: JSON.stringify(baseUrl),
  },
  IS_DEV: isDev,
  IS_PROD: isProd,
  IS_DEV_SERVER: isDevServer,
};

export const definePlugin = new DefinePlugin(config);
