import LoggerInstance from "./Logger";
import sequelize from "./Sequelize";
export default async () => {
  await sequelize.authenticate();
  LoggerInstance.info(`Database loaded Successfully `);
  return {};
};
