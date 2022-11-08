const BasePage = require('./BasePage')

class FilmPage extends BasePage {
  constructor() {
    super()
    this.filmPageHeader = 'h1[data-testid="hero-title-block__title"]'
    this.startRateBtn = 'button.ipc-button.ipc-button--single-padding'
    this.ratingStarsBar = 'button.ipc-starbar__rating__button'
    this.ratingCount = 'div.ipc-rating-display__rating'
    this.finishRateBtn =
      'div.ipc-rating-prompt__rating-container button.ipc-button'
  }
  /**
   * Rate current film based on the index of rate stars provided. Checks if the provided
   * argument satisfies the range.
   * @param  {Number} index - number from 0 to 9 to rate the film with 1 to 10 stars respectively
   */
  rateFilm(index) {
    if (index < 0 || index > 9) {
      cy.log('Wrong index provided (should be between 0 and 9)')
      return this
    } else {
      cy.get(this.startRateBtn).should('have.length', 2).eq(0).click()
      cy.get(this.ratingStarsBar)
        .should('have.length', 10)
        .eq(index)
        .click({ force: true })
      cy.get(this.ratingCount).should('have.text', (index + 1).toString())
      cy.get(this.finishRateBtn).click({ force: true })
      return this
    }
  }
}
module.exports = new FilmPage()
