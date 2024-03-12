"use server";
import { createClient } from "@vercel/postgres";

async function handleQuery(query) {
	const client = createClient();
	await client.connect();

	try {
		console.log(query);
		//const check = query.toLowerCase().replace("select", "");

		const res = await client.sql`SELECT * FROM Shippers;`;
		console.log(res);
	} catch (error) {
		console.log(error);
	} finally {
		await client.end();
	}
}

export const fetchQuery = async (query) => {
	return await handleQuery(query);
};
