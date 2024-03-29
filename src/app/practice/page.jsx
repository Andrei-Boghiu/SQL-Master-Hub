"use client";

import styles from "./practice.module.css";
import QueryEditor from "@/components/queryEditor/QueryEditor";
import QueryResults from "@/components/queryResults/QueryResults";
import SchemaExplorer from "@/components/schemaExplorer/schemaExplorer";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import Loading from "./loading";

const Practice = () => {
	const [query, setQuery] = useState("");
	const [queryResult, setQueryResult] = useState(null);
	const [schemaResults, setSchemaResults] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleQueryChange = (newQuery) => {
		setQuery(newQuery);
	};

	const updateSchema = async () => {
		console.log("Not connected to a db...");
		// const schema = await fetchSchemaResults();
		// console.log(schema);
		// setSchemaResults(schema);
	};

	const executeQuery = async () => {
		console.log("Not connected to a db...");
		// setLoading(true);
		// const res = await executeSelectQuery(query);
		// setQueryResult(res);
		// setLoading(false);
	};

	useEffect(() => {
		updateSchema();
	}, []);

	// To Also Add a Loader for when query is executing and waiting for response

	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>Coming Soon!</h2>
			<h1 className={styles.title}>Our practice page isn't ready yet 😔</h1>
			<p className={styles.desc}>
				The jedi team is actively fighting with dark forces (frugality) in order to recapture our beloved practice playground. 👾🔫
			</p>
			<p>#SQLJediFall</p>

			{/* <div className={styles.schema}>
				<Suspense fallback={<Loading />}>
					<SchemaExplorer schemaResults={schemaResults} />
				</Suspense>
			</div>

			<div className={styles.playground}>
				<Suspense fallback={<Loading />}>
					<QueryEditor query={query} onQueryChange={handleQueryChange} executeQuery={executeQuery} loading={loading} />
				</Suspense>

				<Suspense fallback={<Loading />}>
					<QueryResults queryResults={queryResult} />
				</Suspense>
			</div> */}
		</div>
	);
};

export default Practice;
