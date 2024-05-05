import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  MONGO_URL: get("MONGO_URL").required().asString(),
  MONGO_DB_NAME: get("MONGO_DB_NAME").required().asString(),
  JWT_SECRET: get("JWT_SECRET").required().asString(),
  SMTP_HOST: get("SMTP_HOST").required().asString(),
  SMTP_PORT: get("SMTP_PORT").required().asString(),
  SMTP_USER: get("SMTP_USER").required().asString(),
  SMTP_PASS: get("SMTP_PASS").required().asString(),
};
