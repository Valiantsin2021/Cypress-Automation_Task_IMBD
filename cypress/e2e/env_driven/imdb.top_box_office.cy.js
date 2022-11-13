const Page = require('../../pageobjects/BasePage')
const FilmPage = require('../../pageobjects/FilmPage')
const {
  topBoxOfficeHeaderTxt,
  signInUrl,
  baseUrl,
  topBoxFilm,
  filmRate
} = require('../../utils/constants')
const BasePage = new Page()

describe(`Should open ${baseUrl},`, () => {
  before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })
  it(`open Home Page, and check Top Box Office list header is '${topBoxOfficeHeaderTxt}'`, () => {
    cy.log(`Open IMDB Home page`)
    BasePage.open()
    cy.log(`Check the Top Box Office list header is '${topBoxOfficeHeaderTxt}'`)
    cy.scrollTo('bottom')
    cy.get(BasePage.topBoxOfficeHeader).should(
      'have.text',
      topBoxOfficeHeaderTxt
    )
  })
  it(`click on the item number ${Cypress.env(
    'topBoxFilm'
  )}on the Top box office list, and check Film Page header is visible`, () => {
    cy.log(
      `Click the ${Cypress.env(
        'tvBoxFilm'
      )} film link using index ${topBoxFilm}`
    )
    BasePage.openTopBoxOfficeFilm(topBoxFilm)
    cy.log(`Check the page header is displayed`)
    cy.get(FilmPage.filmPageHeader).should('be.visible')
  })
  it(`set '${Cypress.env(
    'filmRate'
  )}' stars Rating, click on the Rate button, and check page redirected to the Sign In page`, () => {
    //provide index from 0 to 9 to rateFilm()
    cy.log(`Rate the film with '${Cypress.env('filmRate')}' stars Rating`)
    FilmPage.rateFilm(filmRate)
    cy.log(`Check the IMDB login/signup page is opened`)
    cy.url().should('contain', signInUrl)
  })
})
