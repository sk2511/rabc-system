import Sequelize from "sequelize";
async function up({ context: queryInterface }) {
  await queryInterface.createTable("role_permissions", {
    id: {
      allowNull: false,
      autoIncrement: true,
      defaultValue: Sequelize.INTEGER,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    role_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: "roles",
        key: "id",
      },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    permission_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: "permissions",
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
  await queryInterface.dropTable("role_permissions");
}
export { up, down };
