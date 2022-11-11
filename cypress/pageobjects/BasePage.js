class BasePage {
  constructor() {
    this.searchInput = '#suggestion-search'
    this.menuBtn = '[aria-label="Open Navigation Drawer"]'
    this.top250TVShowsLink = '[href="/chart/toptv/?ref_=nv_tvv_250"]'
    this.topBoxOfficeHeader = '.top-box-office h3'
    this.topBoxOfficeLinks = '[data-testid="boxOfficeList"] .boxOfficeTitleLink'
  }
  /**
   * Opens the Home page of imdb.com
   */
  open() {
    return cy.visit(`/`)
  }
  /**
   * Performs search on the Home page for actor using current film actor name and selector for his avatar
   * from the ActorPage.js
   * @param  {String} name - current actor name
   * @param  {String} avatar - selector for current actor avatar
   */
  searchActor(name, avatar) {
    cy.get(this.searchInput).type(name)
    cy.get(avatar).eq(0).click({ force: true })
    return this
  }
  /**
   * Click on the menu button on the Home page
   */
  clickMenu() {
    return cy.get(this.menuBtn).click()
  }
  /**
   * Click on Top 250 TV shows link in the menu on the Home page
   */
  openTop250TVShows() {
    this.clickMenu()
    cy.get(this.top250TVShowsLink).click()
    return this
  }
  /**
   * Click on the Top Box Office film link on the list based on the index of film link provided. Checks if the provided
   * argument satisfies the range.
   * @param  {Number} index - number from 0 to 5 to click on 1st to 6th film link respectively
   */
  openTopBoxOfficeFilm(index) {
    if (index < 0 || index > 5) {
      cy.log('Wrong index provided (should be between 0 and 5)')
      return this
    } else {
      cy.get(this.topBoxOfficeLinks).should('have.length', 6).eq(index).click()
      return this
    }
  }
}
module.exports = BasePage
