import styles from "./schemaExplorer.module.css";

// To Be Completed when I find a database
const SchemaExplorer = () => {
	return (
		<div className={styles.container}>
			<h3>Schema</h3>
			<p>Choose from available tables</p>
			<table>
				<tbody>
					<tr>
						<td>Table One</td>
					</tr>
					<tr>
						<td>Table One</td>
					</tr>
					<tr>
						<td>Table One</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default SchemaExplorer;
