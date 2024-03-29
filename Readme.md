# JS automation tests with Cypress framework

## Test statuse badge: ![](https://github.com/Valiantsin2021/Cypress-Automation_Task_IMBD/workflows/Cypress_AutomationTest_IMDB/badge.svg)

## This repository purpose is to perform test automation on IMDB.com website with the following scenarios:

1. Go to IMDb.com, search for Nicolas Cage and access his profile; then sort filmography by Rating, and
   include only Feature Film. (**imdb.actor_filmography.cy.js** file)

2. Go to IMDb.com, click on the 2nd item on the Top box office list; then click on the Rate, set 5 stars
   Rating and click on the Rate button. (**imdb.top_box_office.cy.js** file)

3. Go to IMDb.com, click on the Menu button, and navigate to the Top 250 TV Shows section; then click
   on Breaking Bad, go to the Photos, display only Danny Trejo's photos, and then click on the 2nd photo in the list. (**imdb.top250_tv_shows.cy.js** file)

## If you want to use another parameters in the test ('actor', 'TV show actor' and 'TV show name') please change actorName, tvShowActorName, tvShowTitle, tvShowfoto, topBoxFilm, filmRate variables in cypress.config.js, or pass with --env flag through the command line (dot separated). For example "npx cypress run --env actorName=Billy.Bob.Thornton,tvShowActorName=Billy.Bob.Thornton,tvShowTitle=Fargo,tvShowFoto=1,topBoxFilm=3".

## Report page (available if repository is public) https://valiantsin2021.github.io/Cypress-Automation_Task_IMBD/

## Job done:

### Cypress

1. Page Object Model and Environment variables
2. Constants in a separate file
3. Mochawesome report (mochawesome-report dir)
4. Github Actions yml file
5. Jenkiinsfile with pipeline script to run tests in docker container
6. DockerFile to run in docker container
7. All methods are made universal for reusability reason with the different test scenarios (depends on "film actor name", "TV show", "TV show actor name")
8. Cypress dashboard connected
9. Precommit hook to run Prettier/Eslint for auto code formatting before commit
10. Add data driven test suite (use data file to dynamically create test cases)
11. Add allure report ( to generate HTML report - "npm run allure")

## Setup:

1. Clone this repository
2. Navigate to the folder of cloned repository and run terminal
3. Install dependencies with "npm install"
4. To run tests headless with report generated - "npm test"
5. To run tests using the Launchpad - "npx cypress open"
6. To run only data driven test suite - "npm run test:dd"
7. To run in free mode with allure reporter - "npx cypress run --env allure=true --spec <path to spec file or folder>"
8. To run env_driven test suite axample "npx cypress run --env actorName=<Billy.Bob.Thornton>,tvShowActorName=<Billy.Bob.Thornton>,tvShowTitle=<Fargo>,tvShowFoto=<1>,topBoxFilm=<3>"
9. To run env suite with dashboard - "npm run cy:dashboard"
10. To make history allure report run "mkdir allure-results/history || echo "history folder already in place...continuing :)" && cp allure-report/history/\* ./allure-results/history && echo "Allure trends updated!" allure generate allure-results --clean -o allure-report && allure open allure-report"
11. To generate Allure HTML report - "npm run allure"

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

## To run with sorry-cypress

Setup:
npm install cy2 cypress
(windows) npm install cross-env
export CYPRESS_API_URL="http://localhost:1234/"
npx cross-env CYPRESS_API_URL="http://localhost:1234/" cy2 run --parallel --record --key somekey --ci-build-id hello-cypress

We are going to run the full sorry-cypress kit:
director service will use MongoDB to store the test runs and the results
API service (a GraphQL interface to MongoDB) to let us issue queries and retrieve tests results
Dashboard service - a web dashboard for browsing the results
minio will let us store files - videos and screenshots generated by cypress agent
We are going to run all the services locally using docker-compose

# get docker-compose file

curl --output docker-compose.minio.yml https://raw.githubusercontent.com/sorry-cypress/sorry-cypress/master/docker-compose.minio.yml

# start the services

docker-compose -f ./docker-compose.minio.yml up
For each spec file open new terminal and run

CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --parallel --record --key somekey --ci-build-id hello-cypress

After successfully running docker-compose, we have:
director service on http://localhost:1234
API service on http://localhost:4000
Dashboard running on http://localhost:8080 (change to 8081 if your jenkins runs on 8080)
Open the dashboard at http://localhost:8080 (change to 8081 if your jenkins runs on 8080)
