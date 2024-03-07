"use client";
import styles from "./practice.module.css";
import QueryEditor from "@/components/queryEditor/QueryEditor";
import QueryResults from "@/components/queryResults/QueryResults";
import SchemaExplorer from "@/components/schemaExplorer/schemaExplorer";
import { useState } from "react";
import executeFetchQuery from "@/database/practice/practice";

const Practice = () => {
	const [query, setQuery] = useState("");
	const [queryResult, setQueryResult] = useState(null);

	const handleQueryChange = (newQuery) => {
		setQuery(newQuery);
	};

	const executeQuery = async () => {
		// Send query to main process for execution
		// Receive and set results
		const res = await executeFetchQuery(query);
		console.log(query);

		setQueryResult(res);

		// window.ipcRenderer.send("execute-query", query);

		// window.ipcRenderer.on("query-result", (event, result) => {
		// 	setQueryResult(result);
		// });
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