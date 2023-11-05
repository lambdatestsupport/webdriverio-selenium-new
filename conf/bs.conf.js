const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack build Shift tab',
      source: 'webdriverio:sample-master:v1.2'
    }
  },
  services: [
    [
      'browserstack',
      { buildIdentifier: '#${BUILD_NUMBER}' },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      'bstack:options': {
        browserVersion: 'latest',
        os: 'Windows',
        osVersion: '10'
      },
    }
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});