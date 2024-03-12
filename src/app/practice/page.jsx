"use client";
import styles from "./practice.module.css";
import QueryEditor from "@/components/queryEditor/QueryEditor";
import QueryResults from "@/components/queryResults/QueryResults";
import SchemaExplorer from "@/components/schemaExplorer/schemaExplorer";
import { useState } from "react";
import { fetchQuery } from "@/lib/serverActions";

const Practice = () => {
	const [query, setQuery] = useState("");
	const [queryResult, setQueryResult] = useState(null);

	const handleQueryChange = (newQuery) => {
		setQuery(newQuery);
	};

	const executeQuery = async () => {
		console.log(query);

		// const res = await fetch(`/api/executeQuery?query=${query}`);
		const res = await fetchQuery(query);

		console.log(res);
		// console.log({ rows, fields });

		// setQueryResult(res);
	};

	// To Also Add a Loader for when query is executing and waiting for response

	return (
		<div className={styles.container}>
			<div className={styles.schema}>
				<SchemaExplorer />
			</div>

			<div className={styles.playground}>
				<QueryEditor
					query={query}
					onQueryChange={handleQueryChange}
					executeQuery={executeQuery}
				/>
				<QueryResults result={queryResult} />
			</div>
		</div>
	);
};

export default Practice;
