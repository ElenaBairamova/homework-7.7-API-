const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wgg992",
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    retries: 0,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
