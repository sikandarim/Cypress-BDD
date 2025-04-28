pipeline {
  agent any

  parameters {
    choice(name: 'ENV', choices: ['dev', 'qa', 'prod'], description: 'Choose Environment')
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/your-username/your-repo-name.git', branch: 'main'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh "npx cypress run --env ENV=${params.ENV}"
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean -o allure-report'
      }
    }

    stage('Publish Allure Report') {
      steps {
        allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
      }
    }
  }
}
