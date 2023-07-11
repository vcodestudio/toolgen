const crypto = require("crypto");

function rn() {
  return crypto.randomBytes(16).toString("hex");
}

module.exports = {
  apps: [
    {
      name: "backend",
      script: "npm",
      args: "run develop",
      cwd: "./back",
      restartDelay: 3000,
      env: {
        NODE_ENV: "development",
        port: 1337,
        APP_KEYS: [...Array(2)].map((a) => rn()),
        API_TOKEN_SALT: rn(),
        JWT_SECRET: rn(),
        ADMIN_JWT_SECRET: rn(),
      },
    },
    {
      name: "frontend",
      script: "npm",
      args: "run dev",
      cwd: "./web",
      restartDelay: 3000,
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
    },
  ],
};
