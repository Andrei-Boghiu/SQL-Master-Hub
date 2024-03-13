"use server";
const mysql = require("mysql2/promise");

// To Replace with ENV
const dbConfig = {
    host: "localhost",
    user: process.env.DB_PRACTICE_USER,
    database: process.env.DB_PRACTICE_DATABASE,
    password: process.env.DB_PRACTICE_PASSWORD,
  };

export const executeFreeQuery = async (query) => {
  
    const connection = await mysql.createConnection(dbConfig);
    let globalRes;

  try {
    const [results] = await connection.execute(`${query}`, [])
    globalRes = results;
  } catch (error) {
    const data = JSON.stringify(error)
    return data;
  }


    await connection.commit();
    await connection.end();

    return globalRes;
}
 
export const fetchSchemaResults = async () => {
  const connection = await mysql.createConnection(dbConfig);

  const [results] = await connection.execute(`show tables from practice`, [])

  await connection.commit();
  await connection.end();
	return results;
}
