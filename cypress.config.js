const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  pageLoadTimeout: 30000,
  video: true,
  screenshotOnRunFailure: true,
  videoUploadOnPasses: false,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
    Username: 'abdullah@gmail.com',
    Password: 'Test@12345',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.google.com',
    specPattern: 'cypress/e2e//**/*.js'
  },
})