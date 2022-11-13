const Page = require('../../pageobjects/BasePage')
const ActorPage = require('../../pageobjects/ActorPage')
const {
  actorName,
  ratingOptionOld,
  ratingLinkTxt,
  ratingHeaderTxt,
  featureHeaderTxt,
  baseUrl
} = require('../../utils/constants')
const BasePage = new Page()

describe(`Should open '${baseUrl}',`, () => {
  before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })
  it(`search and access ${actorName} profile, and check profile header is '${actorName}'`, () => {
    cy.log(`Open IMDB Home page`)
    BasePage.open()
    cy.log(`Search for actor with name ${actorName}`)
    ActorPage.avatar = actorName
    BasePage.searchActor(actorName, ActorPage.actor)
    cy.log(`Check the opened page has the header with text ${actorName}`)
    cy.get(ActorPage.profileHeader).eq(0).should('have.text', actorName)
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
