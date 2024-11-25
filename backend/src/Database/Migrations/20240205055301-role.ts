import Sequelize from "sequelize";
async function up({ context: queryInterface }) {
  await queryInterface.createTable("roles", {
    id: {
      allowNull: false,
      autoIncrement: true,
      defaultValue: Sequelize.INTEGER,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {  
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
async function down({ context: queryInterface }) {
  await queryInterface.dropTable("roles");
}
export { up, down };
