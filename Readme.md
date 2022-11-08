# JS automation tests with Cypress framework

## This repository purpose is to perform test automation on IMDB.com website with the following scenarios:

1. Go to IMDb.com, search for Nicolas Cage and access his profile; then sort filmography by Rating, and
   include only Feature Film. (**imdb.actor_filmography.cy.js** file)

2. Go to IMDb.com, click on the 2nd item on the Top box office list; then click on the Rate, set 5 stars
   Rating and click on the Rate button. (**imdb.top_box_office.cy.js** file)

3. Go to IMDb.com, click on the Menu button, and navigate to the Top 250 TV Shows section; then click
   on Breaking Bad, go to the Photos, display only Danny Trejo's photos, and then click on the 2nd photo in the list. (**imdb.top250_tv_shows.cy.js** file)

## If you want to use another parameters in the test ('actor', 'TV show actor' and 'TV show name') please change actorName, tvShowActorName, tvShowTitle variables in cypress.config.js, or pass with --env flag through the command line (dot separated). For example "cypress run --env actorName=Danny.DeVito,tvShowActorName=James.Gandolfini,tvShowTitle=The.Sopranos".

## Report page (available if repository is public) https://valiantsin2021.github.io/Valentin_Lutchanka_AutomationTest/

## Job done:

### Cypress

1. Page Object Model and Environment variables
2. Constants in a separate file
3. Mochawesome report (mochawesome-report dir)
4. Github Actions yml file
5. Jenkiinsfile with pipeline script to run tests in docker container
6. DockerFile to run in docker container
7. All methods are made universal for reusability reason with the different test scenarios (depends on "film actor name", "TV show", "TV show actor name")

## Setup:

1. Clone this repository
2. Navigate to the folder of cloned repository and run terminal
3. Install dependencies with "npm install"
4. To run tests headless with report generated - "npm test"
5. To run tests using the Launchpad - "npx cypress open"

## To run test dockerized:

1. Clone this repository , navigate to the folder of cloned repository and run terminal
2. "docker build -t <image name> ." (to build image)
3. "docker start <container name>" to run container
4. "docker run -it --rm --name <container name> -v ${PWD}:/e2e -w /e2e --entrypoint=cypress cypress/included:10.11.0 run"
5. "docker image rm <image name>" to remove image

## To run the image from Docker Hub:

1. "docker pull valiantsin2022/valentin_lutchanka_automation_test"
2. "docker run -it --rm --name valentin_lutchanka_automation_test -v ${PWD}:/e2e -w /e2e --entrypoint=cypress cypress/included:10.11.0 run"
3. "docker image rm valiantsin2022/valentin_lutchanka_automation_test" to remove image
