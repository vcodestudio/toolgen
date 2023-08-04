const cronTasks = require("./cron-tasks");

module.exports = ({ env }) => ({
  // url: env("PUBLIC_URL", "http://127.0.0.1:1337"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: {
    enabled: env.bool("CRON_ENABLED", false),
    tasks: cronTasks,
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
