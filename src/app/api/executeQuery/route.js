import { createClient } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
	const client = createClient();
	await client.connect();
	try {
		const { searchParams } = new URL(request.url);
		const query = searchParams.get("query");

		console.log(query);

		const check = query.toLowerCase().replace("select", "");

		const res = await client.sql`SELECT ${check}`;
		console.log(res);
		return NextResponse.json({ res }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	} finally {
		await client.end();
	}
}
