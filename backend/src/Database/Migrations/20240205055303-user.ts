import Sequelize from "sequelize";
async function up({ context: queryInterface }) {
  await queryInterface.createTable("users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      defaultValue: Sequelize.INTEGER,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    role_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "roles",
        key: "id",
      },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
  await queryInterface.dropTable("users");
}
export { up, down };
