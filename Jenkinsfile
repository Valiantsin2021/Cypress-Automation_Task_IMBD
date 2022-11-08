pipeline {
    agent any

    stages {
        stage('Build image') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'docker build -t cypress_imdb .'
            }
        }
        stage('Run Test in container') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'docker run --name cypress_imdb -v "%cd%":/e2e -w /e2e --entrypoint=cypress cypress/included:10.11.0 run'
            }
        }
        stage('Copy report') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'docker cp cypress_imdb:/app/mochawesome-report ./mochawesome-report'
            }
        }
        stage('Publish HTML report') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            }
        }
        stage('Clean docker container') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'docker container rm cypress_imdb'
            }
        }
        stage('Clean docker image') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'docker image rm cypress_imdb'
            }
        }
    }
}
