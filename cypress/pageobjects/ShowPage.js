const BasePage = require('./BasePage')

class ShowPage extends BasePage {
  constructor() {
    super()
    this.showPageHeader = 'h1[data-testid="hero-title-block__title"]'
    this.fotosLink = 'section[data-testid="Photos"] a.ipc-title-link-wrapper'
    this.fotoHeader = 'h1.header'
    this.fotosPersonsLinks = '#media_index_name_filters a'
    this.currentFilterTitle = '#current_filter'
    this.personFotosList = 'div.media_index_thumb_list a'
    this.personFoto = ''
  }
  /**
   * Set the alt attribute to TV show actor photo selector based on the current TV show actor name
   * from the env variable in cypress.config.js
   * Performed before the check if the actor's foto is displayed
   * @param  {String} tvShowActorName
   */
  set fotoAttr(tvShowActorName) {
    this.personFoto = `div[data-testid="media-viewer"] img[alt*="${tvShowActorName}"]`
  }
  /**
   * Click on Fotos link on the current TV show page
   */
  clickFotos() {
    return cy.get(this.fotosLink).click()
  }
  /**
   * Choose the current TV show actor's fotos based on the current TV show actor name
   * from the env variable in cypress.config.js
   * @param  {String} person - current TV show actor name
   */
  choosePersonFotos(person) {
    return cy.get(this.fotosPersonsLinks).contains(person).click()
  }
  /**
   * Click on current TV show actor foto based on the index of foto provided. Checks if the provided
   * argument satisfies the range.
   * @param  {Number} index - number from 0 to 6 to click on 1st to 7th foto respectively
   */
  clickPersonFoto(index) {
    if (index < 0 || index > 6) {
      cy.log('Wrong index provided (should be between 0 and 6)')
      return this
    } else {
      cy.get(this.personFotosList)
        .should('have.length.greaterThan', 1)
        .eq(index)
        .click()
      return this
    }
  }
}
module.exports = new ShowPage()
