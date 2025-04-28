# 🚀 Cypress Web Automation Framework

This guide will help you **install**, **configure**, and **run** the Cypress-based Web Test Automation Framework developed for **robust Web Testing**.


## Prerequisites

Before you begin, ensure you have the following tools installed:

- ✅ **JDK (Java Development Kit)** — Required for tools like Jenkins.
- ✅ **Node.js** — Required to run Cypress and manage project dependencies.
- ✅ **Cypress** — The core testing framework (installed via npm).
- ✅ **Allure Commandline** — For generating beautiful test reports.
- ✅ **Git** — For cloning the repository and version control.
- ✅ **Jenkins** *(Optional)* — For automating test execution in CI/CD pipelines.

---

## Installation Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/sikandarim/Cypress-BDD.git
   cd Cypress-BDD

2. Install Node Modules
   ```bash
   npm install

3. Install Cypress (Optional if not already installed)
   ```bash
   npm install cypress --save-dev

4. Install Allure Commandline (Globally)
   ```bash
   npm install -g allure-commandline --save-dev
   
5. Verify Installation
   ```bash
   npx cypress --version
   allure --version
---

##  Running the Tests


Open Cypress Test Runner (GUI mode):
npx cypress open
Run Cypress Tests Headlessly:
npx cypress run
Run Cypress Tests with Environment Variables:
npx cypress run --env ENV=prod


## Generate the allure

allure generate allure-results --clean
Open the Allure Report:
allure open





