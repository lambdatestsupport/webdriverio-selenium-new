exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: true,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: '',
  key: '',
  buildName: process.env.LT_BUILD_NAME,
  specs: ["./tests/specs/test1.js"],
  exclude: [],

  capabilities: [
    {
      "LT:Options": {
      browserName: "chrome",
      version: "latest",
      name: "Test WebdriverIO Single",
      build: "WebDriver Selenium Sample 1",
      tunnel: false
    }
    }],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 50000,
  }
};