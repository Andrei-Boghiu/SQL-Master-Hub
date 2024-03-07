import styles from "./schemaExplorer.module.css";

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
