import { defineConfig } from "cypress"; // ✅ Fix: must use import style
import { allureCypress } from "allure-cypress/reporter"; // ✅ Correct import for new Allure
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor"; // ✅ Fix import style
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on, config) {
  // ✅ Setup new Allure plugin
  allureCypress(on, config, {
    resultsDir: "allure-results", // optional, default is allure-results
  });

  // ✅ Setup Cucumber preprocessor
  await addCucumberPreprocessorPlugin(on, config);

  // ✅ Setup esbuild bundler
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

export default defineConfig({
  defaultCommandTimeout: 6000,
  retries: {
    runMode: 1,
  },
  projectId: "nodpcq",

  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js", // ✅ Load e2e.js explicitly
    baseUrl: "https://www.saucedemo.com",
    experimentalRunAllSpecs: true,
  },
});
