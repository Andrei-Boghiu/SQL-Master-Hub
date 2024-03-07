// here connect to a database for the practice hub code editor
// PostgresSQL is preferred, but MySQL is faster setup time

// and build API endpoints to be used in other files
import { sql } from "@vercel/postgres";

const executeFetchQuery = async (query) => {
	const { rows } = await sql`${query}`;
	// const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
	return rows;
};

export default executeFetchQuery;
