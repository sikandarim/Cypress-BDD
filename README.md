🚀 Set Up and Use This Cypress Automation Framework

This guide will help you install, configure, and run the Cypress-based Web Test Automation Framework developed for robust Web Testing.

📦 Project Structure Overview

├── cypress/
│   ├── e2e/          # 📄 Feature files (BDD format)
│   ├── support/      # 🛠️ Custom commands and utilities
│   ├── fixtures/     # 📊 Test data
│   └── plugins/      # 🔌 Cypress plugins
├── Jenkinsfile       # ⚙️ CI/CD pipeline configuration
├── package.json      # 📦 Project dependencies
├── README.md         # 📝 Project documentation
└── allure-results/   # 📂 Allure raw test result files
⚡ Prerequisites

Before you begin, ensure the following tools are installed:

✅ JDK (Java Development Kit) – Required for tools like Jenkins.
✅ Node.js – Required to run Cypress and manage project dependencies.
✅ Cypress – The core testing framework (installed via npm).
✅ Allure Commandline – For generating beautiful test reports.
✅ Git – For cloning the repository and version control.
✅ Jenkins (Optional) – For automating test execution in CI/CD pipelines.
🛠️ Installation Steps

1. Clone the Repository
git clone https://github.com/sikandarim/Cypress-BDD.git
cd Cypress-BDD
2. Install Node Modules
npm install
3. Install Cypress (Optional if not already installed)
npm install cypress --save-dev
4. Install Allure Commandline (Globally)
npm install -g allure-commandline --save-dev
5. Verify Installation
npx cypress --version
allure --version
🧪 Running the Tests

Open Cypress Test Runner (GUI mode):
npx cypress open
Run Cypress Tests Headlessly:
npx cypress run
Run Cypress Tests with Environment Variables:
npx cypress run --env ENV=prod
📈 Generating Allure Reports

After running your tests:

Generate the Allure Report:
allure generate allure-results --clean
Open the Allure Report:
allure open
🔄 Running in Jenkins (Optional CI/CD Integration)

🛠️ Configure NodeJS under Jenkins Global Tools Configuration.
📄 Create a Pipeline Job that uses your project's Jenkinsfile.
🔌 Install the following Jenkins Plugins:
NodeJS Plugin
Allure Jenkins Plugin
Git Plugin
🚀 Run your Jenkins pipeline —
It will automatically:
Checkout the repository
Install dependencies
Execute Cypress tests
Generate Allure reports
🤝 Contribution Guidelines

🍴 Fork this repository.
🌿 Create a new branch:
git checkout -b feature/your-feature-name
🖋️ Submit a Pull Request describing your changes.
✅ Follow good commit message practices!
