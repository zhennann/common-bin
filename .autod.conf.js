'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  registry: 'https://r.cnpmjs.org',
  exclude: [
    './test/fixtures',
  ],
  devdep: [
    'autod',
    'egg-ci',
    'eslint',
    'eslint-config-egg',
    'mocha',
    'istanbul',
  ],
  keep: [
  ],
  semver: [
    'koa@1',
  ],
};
