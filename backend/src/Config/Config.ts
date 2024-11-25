import dotenv from "dotenv";
import { Options } from "sequelize";

dotenv.config();

const {
  NODE_ENV,
  PORT,
  DB_PASSWORD,
  DB_NAME,
  DB_USER,
  DB_HOST,
  DIALECT,
  DB_PORT,
  AUTH_FRONTEND_URL,
  JWT_SECRET_KEY,
  LOG_LEVEL,
  JWT_REFRESH_TOKEN_SECRET_KEY,
} = process.env;

const db: Options = {
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT || "5432", 10),
  database: DB_NAME || "",
  username: DB_USER,
  password: DB_PASSWORD,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: true,
};

const config = {
  env: NODE_ENV,
  port: parseInt(PORT || "3000", 10),
  db,
  database: DB_NAME || "",
  logs: {
    level: LOG_LEVEL || "silly",
  },
  accountFrontendUrl: AUTH_FRONTEND_URL,
  jwtSecretKey: JWT_SECRET_KEY,
  jwtRefreshTokenSecretKey: JWT_REFRESH_TOKEN_SECRET_KEY,
};

export default config;
