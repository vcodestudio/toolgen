const crypto = require("crypto");

function rn() {
  return crypto.randomBytes(16).toString("hex");
}
module.exports = {
  apps: [
    {
      name: "backend",
      script: "npm",
      args: "start",
      cwd: "./back",
    },
    {
      name: "frontend",
      script: "npm",
      args: "start",
      cwd: "./web",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
