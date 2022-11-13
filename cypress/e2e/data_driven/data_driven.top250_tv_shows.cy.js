const Page = require('../../pageobjects/BasePage')
const ShowPage = require('../../pageobjects/ShowPage')
const Top250TVShowsPage = require('../../pageobjects/Top250TVShowsPage')
const {
  baseUrl,
  top250TVShowsHeaderTxt,
  fotosPageHeaderTxt
} = require('../../utils/constants')
const data = require('../../utils/data')
const BasePage = new Page()

describe(`Should open ${baseUrl}, Data_driven-tv_shows`, () => {
  before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })
  data.forEach(el => {
    let tvShowTitle = el.tvShowTitle
    let tvShowActorName = el.tvShowActorName
    let tvshowFoto = el.tvShowFoto - 1
    it(`click on the Menu button, open Top 250 TV shows list and check page's header is '${top250TVShowsHeaderTxt}'`, () => {
      cy.log(`Open IMDB Home page`)
      BasePage.open()
      cy.log(`Click on the Menu button, open Top 250 TV shows list`)
      BasePage.openTop250TVShows()
      cy.log(`Check the page header is '${top250TVShowsHeaderTxt}'`)
      cy.get(Top250TVShowsPage.header).should(
        'have.text',
        top250TVShowsHeaderTxt
      )
    })
    it(`click on ${tvShowTitle} TV show link, and check page's header is '${tvShowTitle}'`, () => {
      cy.log(`Click on ${tvShowTitle} TV show link`)
      Top250TVShowsPage.clickShowLink(tvShowTitle)
      cy.log(`Check the page header is '${tvShowTitle}'`)
      cy.get(ShowPage.showPageHeader).should('have.text', tvShowTitle)
    })
    it(`go to the Photos, and check pages header is '${fotosPageHeaderTxt}'`, () => {
      cy.log(`Click on the Photos link`)
      ShowPage.clickFotos()
      cy.log(`Check the page header is '${fotosPageHeaderTxt}'`)
      cy.get(ShowPage.fotoHeader).should('have.text', fotosPageHeaderTxt)
    })
    it(`display only ${tvShowActorName}'s photos, and check current filter title text is '${tvShowActorName}'`, () => {
      cy.log(`Display only ${tvShowActorName}'s photos`)
      ShowPage.choosePersonFotos(tvShowActorName)
      cy.log(`Check the current filter title text is '${tvShowActorName}'`)
      cy.get(ShowPage.currentFilterTitle).should('have.text', tvShowActorName)
    })
    it(`click on the photo number ${el.tvShowFoto} in the list, and check the foto is displayed`, () => {
      cy.log(`Click on the photo number ${el.tvShowFoto} in the list`)
      ShowPage.clickPersonFoto(tvshowFoto)
      ShowPage.fotoAttr = tvShowActorName
      cy.log(`Check the 2nd foto of ${tvShowActorName} is displayed`)
      cy.get(ShowPage.personFoto).should('be.visible')
    })
  })
})
