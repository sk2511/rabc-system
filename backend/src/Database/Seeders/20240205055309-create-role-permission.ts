async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert("role_permissions", [
    {
      id: 1,
      role_id: 1,
      permission_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: 2,
      role_id: 1,
      permission_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: 3,
      role_id: 1,
      permission_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {  
      id: 4,
      role_id: 1,
      permission_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: 5,
      role_id: 2,
      permission_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {   
      id: 6,
      role_id: 2,
      permission_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: 7,
      role_id: 3,
      permission_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: 8,
      role_id: 3,
      permission_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: 9,
      role_id: 3,
      permission_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete("role_permissions", null, {});
}

export { up, down };
