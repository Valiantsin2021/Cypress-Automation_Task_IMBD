const BasePage = require('./BasePage')

/**
 * Actors page class for IMDB.com tests with cypress
 */
class ActorPage extends BasePage {
  constructor() {
    super()
    this.actor = ''
    this.profileHeader = 'h1 > span'
    this.oldSortSelect = 'select[name="sort"]'
    this.newSortBtn = '[data-testid="nm_flmg_srt_menu"]'
    this.newRatingLink = 'a.filmography-by-rating-ql'
    this.filmographyHeader = 'h1.header'
    this.featureFilmInput = 'input[name="movie"]'
  }
  /**
   * Set the alt attribute to actors avatar image selector based on the current actor name
   * Performed before the search (BasePage.searchActor()) film actor
   * by name from the env variable in cypress.config.js
   * @param  {String} actorName - current film actor name
   */
  set avatar(actorName) {
    this.actor = `img[alt="${actorName}"]`
  }
  /**
   * Sort filmography by Rating based on the variant of the page loaded (old design or new)
   * Sor performed with this.oldSortSelect for old page design and with this.newSortBtn and
   * this.newRatingLinkfor new page design
   *
   * @param  {String} ratingOptionOld - text of old select option
   * @param  {String} ratingLinkTxt - inner text of rating selector link
   */
  selectByRating(ratingOptionOld, ratingLinkTxt) {
    // Check if the selector is present in the DOM (old version page loaded). If not - use new page's selector
    cy.get('body').then(body => {
      const select = body[0].querySelectorAll(this.oldSortSelect)
      if (select.length > 0) {
        cy.get(this.oldSortSelect).select(ratingOptionOld)
      } else {
        cy.get(this.newSortBtn).click()
        cy.get(this.newRatingLink).contains(ratingLinkTxt).click()
      }
    })
    return this
  }
}
module.exports = new ActorPage()
