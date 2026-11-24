pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    triggers {
        cron('0 */2 * * *')
    }

    stages {
        stage('Checkout and install') {
            steps {
                git branch: 'setup-jenkins', url: 'https://github.com/HannaZarazheuskaya/module5-js-automation-frameworks-playwright'
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }

        stage('Run eslint and prettier') {
            steps {
                bat 'npm run lint'
                bat 'npm run format:check'
            }
        }

        stage('Run tests') {
            parallel {
                stage('Job 1: UI tests') {
                    steps {
                        bat 'npm run test:ui'
                    }
                }

                stage('Job 2: API tests') {
                    steps {
                        bat 'npm run test:api'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
