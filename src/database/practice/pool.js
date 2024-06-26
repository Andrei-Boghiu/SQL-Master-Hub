"use server";
import pg from 'pg'
const { Pool } = pg

const pool = new Pool();

const organizeData = (data) => {
    const organized = [];
    const tables = {};

    data.forEach((row) => {
        if (!tables[row.table_name]) {
            tables[row.table_name] = [];
        }
        tables[row.table_name].push({ column_name: row.column_name, data_type: row.data_type });
    });

    for (const [tableName, columns] of Object.entries(tables)) {
        organized.push({ table_name: tableName, columns });
    }

    return organized;
};

export async function executeSelectQuery(queryString) {
    try {
        const client = await pool.connect();

        const result = await client.query(queryString);

        const { rows } = result;

        const res = JSON.stringify(rows);
        client.release();
        return res;
    } catch (error) {
        console.log(error);
        return JSON.stringify(error.message);
    }
}

export async function executeSchemaInfoQuery() {
    try {
        const client = await pool.connect();

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
        client.release();

        return res;
    } catch (error) {
        console.log(error);
        return JSON.stringify(error.message);
    }
}
