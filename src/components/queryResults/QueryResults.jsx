import styles from "./queryResults.module.css";

const res = [
	{
		id: 1,
		username: "john_doe",
		email: "john.doe@example.com",
		age: 28,
		city: "New York",
	},
	{
		id: 2,
		username: "jane_smith",
		email: "jane.smith@example.com",
		age: 35,
		city: "Los Angeles",
	},
	{
		id: 3,
		username: "bob_jackson",
		email: "bob.jackson@example.com",
		age: 22,
		city: "Chicago",
	},
	{
		id: 1,
		username: "john_doe",
		email: "john.doe@example.com",
		age: 28,
		city: "New York",
	},
	{
		id: 2,
		username: "jane_smith",
		email: "jane.smith@example.com",
		age: 35,
		city: "Los Angeles",
	},
	{
		id: 3,
		username: "bob_jackson",
		email: "bob.jackson@example.com",
		age: 22,
		city: "Chicago",
	},
	{
		id: 1,
		username: "john_doe",
		email: "john.doe@example.com",
		age: 28,
		city: "New York",
	},
	{
		id: 2,
		username: "jane_smith",
		email: "jane.smith@example.com",
		age: 35,
		city: "Los Angeles",
	},
	{
		id: 3,
		username: "bob_jackson",
		email: "bob.jackson@example.com",
		age: 22,
		city: "Chicago",
	},
];

const QueryResults = ({ result }) => {
	// First check if there's no error

	if (!res) {
		return <div className={styles.container}></div>;
	}

	const keys = Object.keys(res[0]);

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
						{res.map((row, index) => (
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
