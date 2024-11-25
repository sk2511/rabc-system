import { permission } from "process";

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert("permissions", [
    {
      id: 1,
      permission: "Create",
      description:"Create content",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      permission: "Update",
      description:"Read content",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      permission: "Delete",
      description:"Delete content",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      permission: "Manage Users",
      description:"Manage users",
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
}
async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete("permissions", null, {});
}

export { up, down };
