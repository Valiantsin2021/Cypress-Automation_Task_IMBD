console.log(`\n\nStarting Chrome test with actor name, TV show title, and TV show actor name specified in env variables.\n\
To start test with different data - please change actorName, tvShowActorName, tvShowTitle variables in cypress.config.js or\n\
pass the desired names with --env flag through the command line (dot separated).\n\
For example "npx cypress run --env actorName=Danny.DeVito,tvShowActorName=James.Gandolfini,tvShowTitle=The.Sopranos,tvShowFoto=2,topBoxFilm=2,filmRate=5".`)
const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  projectId: '5vkyri',
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://www.imdb.com/',
    env: {
      actorName: 'Nicolas Cage',
      tvShowActorName: 'Danny Trejo',
      tvShowTitle: 'Breaking Bad',
      tvShowFoto: 2,
      topBoxFilm: 2,
      filmRate: 5
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    reporterEnabled: 'mochawesome, spec',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true
    },
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 50000
  }
})
