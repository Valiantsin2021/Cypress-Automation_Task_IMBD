const Page = require('../../pageobjects/BasePage')
const ActorPage = require('../../pageobjects/ActorPage')
const {
  ratingOptionOld,
  ratingLinkTxt,
  baseUrl
} = require('../../utils/constants')
const data = require('../../utils/data')
const BasePage = new Page()
describe(`Should open '${baseUrl}', Data_driven-filmography`, () => {
  before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })
  data.forEach(el => {
    let ratingHeaderTxt = `Sort by IMDb Rating - Highest Rated  Movies and TV Shows With ${el.actorName}  `
    let featureHeaderTxt = `Sort by IMDb Rating - Highest Rated Feature Films With ${el.actorName}  `
    it(`search and access ${el.actorName} profile, and check profile header is '${el.actorName}'`, () => {
      cy.log(`Open IMDB Home page`)
      BasePage.open()
      cy.log(`Search for actor with name ${el.actorName}`)
      ActorPage.avatar = el.actorName
      BasePage.searchActor(el.actorName, ActorPage.actor)
      cy.log(`Check the opened page has the header with text ${el.actorName}`)
      cy.get(ActorPage.profileHeader).eq(0).should('have.text', el.actorName)
    })
    it(`sort filmography by Rating, and check rating sorted header is '${ratingHeaderTxt}'`, () => {
      //performs sort dependant on the 'old' or 'new' version of website is loaded
      cy.log(`Sort filmography by Rating`)
      ActorPage.selectByRating(ratingOptionOld, ratingLinkTxt)
      cy.log(`Check the page header is '${ratingHeaderTxt}`)
      cy.get(ActorPage.filmographyHeader).should('have.text', ratingHeaderTxt)
    })
    it(`include only Feature Film, and check Feature Film header is '${featureHeaderTxt}'`, () => {
      cy.log(`Include only Feature Film`)
      cy.get(ActorPage.featureFilmInput).click()
      cy.log(`Check the page header is '${featureHeaderTxt}'`)
      cy.get(ActorPage.filmographyHeader).should('have.text', featureHeaderTxt)
    })
  })
})
