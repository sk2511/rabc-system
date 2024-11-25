import express from "express";
import cors from "cors";
import sequelize from "./Loaders/Sequelize";
import Loaders from "./Loaders";
import config from "./Config/Config";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      config.accountFrontendUrl,
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

(async () => {
  await Loaders();
})();

// app.use("/api");

sequelize
  .sync()
  .then(() => {
    const PORT = config.port || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
