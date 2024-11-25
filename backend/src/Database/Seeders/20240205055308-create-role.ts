async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert("roles", [
    {
      id: 1,
      name: "Admin",
      description:"Full access",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "User",
      description:"Basic access",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Moderator",
      description:"Content moderator",
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
}
async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete("roles", null, {});
}

export { up, down };
