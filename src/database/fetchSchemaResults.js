import supabase from "../server/supabase";

async function fetchSchemaResults() {
	try {
		const { data, error } = await supabase.from("information_schema.tables").select("table_name").eq("table_schema", "public"); // Filter tables from the public schema

		if (error) {
			console.log(error);
			throw error;
		}
		console.log(data);

		// Extract table names from the response
		const tableNames = data.map((row) => row.table_name);

		return tableNames;
	} catch (error) {
		console.error("Error fetching table names:", error.message);
		return [];
	}
}

export default fetchSchemaResults;
