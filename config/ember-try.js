'use strict';

module.exports = async function () {
  return {
    scenarios: [
      {
        name: 'ember-lts-4.0',
        npm: { devDependencies: { 'ember-source': '~4.0' } },
      },
      {
        name: 'ember-lts-4.4',
        npm: { devDependencies: { 'ember-source': '~4.4' } },
      },
      {
        name: 'ember-lts-3.28',
        npm: { devDependencies: { 'ember-source': '~3.28' } },
      },
      {
        name: 'ember-lts-3.24',
        npm: { devDependencies: { 'ember-source': '~3.24' } },
      },
      {
        name: 'ember-lts-3.20',
        npm: { devDependencies: { 'ember-source': '~3.20' } },
      },
      {
        name: 'ember-lts-3.16',
        npm: { devDependencies: { 'ember-source': '~3.16' } },
      },
    ],
  };
};
