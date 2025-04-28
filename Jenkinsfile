pipeline {
    agent any

    tools {
        nodejs 'Node18'  // the NodeJS tool name you set in Jenkins global tools
    }

    stages {
        stage('Checkout') {
            steps {
               git branch: 'main', url: 'https://github.com/sikandarim/Cypress-BDD.git'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --env ENV=prod'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh '/opt/homebrew/bin/allure generate --clean'
            }
        }

        stage('Publish Allure Report') {
            steps {
                // publish the report to Jenkins UI
                publishHTML(target: [
                    reportName: 'Allure Report',
                    reportDir: 'allure-report',   // this folder will be created by 'generate'
                    reportFiles: 'index.html',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }
}