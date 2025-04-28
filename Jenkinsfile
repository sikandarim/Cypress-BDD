pipeline {
    agent any

    tools {
        nodejs 'Node18'  // <-- This is the same name you gave in Global Tools
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sikandarim/Cypress-BDD.git'
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
                sh 'allure generate --clean'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-results']]
            }
        }
    }
}
