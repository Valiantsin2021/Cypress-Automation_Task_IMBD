let formatedActor = Cypress.env('actorName').replaceAll('.', ' ')
let formatedTVshowTitle = Cypress.env('tvShowTitle').replaceAll('.', ' ')
let formatedtvShowActorName = Cypress.env('tvShowActorName').replaceAll(
  '.',
  ' '
)

let constants = {
  baseUrl: 'https://www.imdb.com/',
  signInUrl: 'https://www.imdb.com/registration/signin',
  actorName: formatedActor,
  ratingOptionOld: 'Rating »',
  ratingLinkTxt: 'by Rating',
  ratingHeaderTxt: `Sort by IMDb Rating - Highest Rated  Movies and TV Shows With ${formatedActor}  `,
  featureHeaderTxt: `Sort by IMDb Rating - Highest Rated Feature Films With ${formatedActor}  `,
  topBoxOfficeHeaderTxt: 'Top box office (US)',
  top250TVShowsHeaderTxt: 'Top Rated TV Shows',
  tvShowTitle: formatedTVshowTitle,
  fotosPageHeaderTxt: 'Photo Gallery',
  tvShowActorName: formatedtvShowActorName
}
module.exports = constants
