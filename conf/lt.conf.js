exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: '',
  key: '',
  buildName: process.env.LT_BUILD_NAME,
  specs: ["./tests/specs/test2.js"],
  exclude: [],

  capabilities: [
    {
      "LT:Options": {
      browserName: "chrome",
      version: "latest",
      name: "Test WebdriverIO Single",
      build: "WebDriver Selenium Shift tab",
      tunnel: false
      // selenium_version: "2.52.0",
      // lambdaStrict: false
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