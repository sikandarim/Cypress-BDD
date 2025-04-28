const { defineConfig } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  stepDefinitions: ["cypress/support/step_definitions/**/*.js"],
  messages: {
    enabled: true, // ✅ Needed for Allure reports
  },
});