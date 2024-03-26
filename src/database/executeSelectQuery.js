import supabase from "../server/supabase";

async function executeSelectQuery(query) {
	try {
		// Execute the provided SQL query
		const { data, error } = await supabase.from().sql(query);

		if (error) {
			throw error;
		}

		return data;
	} catch (error) {
		console.error("Error fetching data:", error.message);
		return null;
	}
}

export default executeSelectQuery;
