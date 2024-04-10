"use server";
import { Client } from "pg";

const clientConfig = { application_name: "SQL Master Hub" };

const organizeData = (data) => {
	const organized = [];
	const tables = {};

	// Group data by table_name
	data.forEach((row) => {
		if (!tables[row.table_name]) {
			tables[row.table_name] = [];
		}
		tables[row.table_name].push({ column_name: row.column_name, data_type: row.data_type });
	});

	// Convert tables object into an array of objects
	for (const [tableName, columns] of Object.entries(tables)) {
		organized.push({ table_name: tableName, columns });
	}

	return organized;
};

export async function executeSelectQuery(queryString) {
	try {
		const client = new Client(clientConfig);
		await client.connect();

		const result = await client.query(queryString);
		// console.log(result);

		const { rows } = result;

		const res = JSON.stringify(rows);
		await client.end();

		return res;
	} catch (error) {
		console.log(error);
		return JSON.stringify(error.message);
	}
}

export async function executeSchemaInfoQuery() {
	try {
		const client = new Client(clientConfig);
		await client.connect();

		// Get Schema information: available tables, columns, data types
		const result = await client.query(`
							SELECT 
									c.table_name,
									c.column_name,
									c.data_type
							FROM 
									information_schema.tables t
							JOIN 
									information_schema.columns c
							ON 
									t.table_name = c.table_name
							WHERE 
									t.table_schema = 'public';
						`);

		const { rows } = result;

		const organizedData = organizeData(rows);

		const res = JSON.stringify(organizedData);
		await client.end();

		return res;
	} catch (error) {
		console.log(error);
		return JSON.stringify(error.message);
	}
}
