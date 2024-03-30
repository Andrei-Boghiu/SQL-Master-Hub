"use client";
import styles from "./queryResults.module.css";

const QueryResults = ({ queryResults }) => {
	// if (queryResults) {
	// 	console.log(queryResults);
	// }

	if (!queryResults) {
		// Query wasn't executed yet
		return <div className={styles.container}>Press "Execute Query" button to run your query.</div>;
	}

	// Empty query results
	if (queryResults.length === 0) {
		return (
			<>
				<h3>No Results:</h3>
				<div>The query results are empty</div>
			</>
		);
	}

	if (typeof queryResults === "string") {
		return <div className={styles.container}>Query Error: {queryResults}</div>;
	}

	// in case everything works as intended | low probability :)
	const keys = Object.keys(queryResults[0]);

	return (
		<div className={styles.container}>
			<h4>Query Results:</h4>
			<div className={styles.tableContainer}>
				<table>
					<thead>
						<tr>
							{keys.map((columnName, index) => (
								<th key={index}>{columnName}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{queryResults.map((row, index) => (
							<tr key={index}>
								{Object.keys(row).map((key, i) => (
									<td key={i}> {row[key]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default QueryResults;
