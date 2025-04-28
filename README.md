Set Up and Use This Cypress Automation Framework

This guide will help you install, configure, and run the Cypress-based test automation framework developed for Web Testing.

Project Structure Overview

├── cypress/
│   ├── e2e/              # Feature files (BDD)
│   ├── support/          # Custom commands and common utilities
│   ├── fixtures/         # Test data
│   └── plugins/          # Cypress plugins
├── Jenkinsfile           # For CI/CD automation
├── package.json          # Project dependencies
├── README.md             # Project documentation
└── allure-results/       # Allure raw test result files

Prerequisites

Before you begin, ensure you have the following installed:

 JDK (Java Development Kit) – Required by some tools like Jenkins.
 Node.js – Required to run Cypress and manage project dependencies.
 Cypress – The core testing framework (installed via npm).
 Allure Commandline – For generating beautiful test reports.
 Git – For cloning the repository and version control.
 Jenkins (Optional) – For automating test execution in CI/CD pipelines.
 
 Installation Steps

Clone the Repository
git clone https://github.com/sikandarim/Cypress-BDD.git
cd your-repository-name
Install Node Modules
npm install
Install Cypress (Cypress will install automatically with the npm command above if added to package.json, but you can also install it manually if needed:)
npm install cypress --save-dev
Install Allure Commandline (Globally)
npm install -g allure-commandline --save-dev
Verify Installation
Check Cypress:
npx cypress --version
Check Allure:
allure --version

Running the Tests

Run Cypress tests locally:
npx cypress open
or headless:

npx cypress run
Run Cypress tests with specific environment variables:
npx cypress run --env ENV=prod

Generating Allure Reports

After running the tests:

Generate the Allure Report:
allure generate allure-results --clean
Open the Report:
allure open

Running in Jenkins (Optional CI/CD Integration)

Configure NodeJS in Jenkins Global Tools Configuration.
Set up a Pipeline Job that uses your Jenkinsfile from the project.
Install necessary Jenkins Plugins:
NodeJS Plugin
Allure Plugin
Git Plugin
Run your pipeline — it will checkout the repo, install dependencies, run Cypress tests, and generate Allure Reports automatically.

Contribution Guidelines

Fork this repository.
Create a new branch (feature/your-feature-name).
Submit a pull request describing your changes.
Follow good commit practices!
