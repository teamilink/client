const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      production: "https://ilinkapp.netlify.app",
      development: "http://localhost:3000",
    },
    projectId: "k7zfad",
  },
});
