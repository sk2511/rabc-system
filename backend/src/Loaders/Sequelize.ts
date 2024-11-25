import config from "../Config/Config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(config.db);

export default sequelize;
