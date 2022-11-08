const BasePage = require('./BasePage')

class Top250TVShowsPage extends BasePage {
  constructor() {
    super()
    this.header = 'h1.header'
    this.showLinks = 'td.titleColumn a'
  }
  /**
   * Click on the TV show link based on the current TV show name from the env variable in cypress.config.js
   * @param  {String} title - current TV show name
   */
  clickShowLink(title) {
    cy.get(this.showLinks).should('have.length', 250).contains(title).click()
    return this
  }
}
module.exports = new Top250TVShowsPage()
