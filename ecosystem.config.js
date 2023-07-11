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
        NODE_ENV: "production",
        port: 1337,
        APP_KEYS: [...Array(2)].map((a) => rn()),
        API_TOKEN_SALT: rn(),
        JWT_SECRET: rn(),
        ADMIN_JWT_SECRET: rn(),
        // aws s3
        AWS_ACCESS_KEY_ID: "AKIARJGLM3WL5PLEQ6MT",
        AWS_ACCESS_SECRET: "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",
        AWS_REGION: "ap-northeast-2",
        AWS_ACL: "public-read",
        AWS_SIGNED_URL_EXPIRES: 900,
        AWS_BUCKET: "stravelte",
      },
    },
    {
      name: "frontend",
      script: "npm",
      args: "run dev --host",
      cwd: "./web",
      restartDelay: 3000,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
