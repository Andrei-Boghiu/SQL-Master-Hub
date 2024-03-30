"use client";
import styles from "./schemaExplorer.module.css";
import Loading from "./loading";

// To Be Completed when I find a database
const SchemaExplorer = ({ schemaResults }) => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<h3 className={styles.title}>Schema</h3>
				<p className={styles.desc}>Choose from available tables</p>
			</div>

			{schemaResults ? (
				<div className={styles["table-summary"]}>
					{schemaResults.map((table, index) => (
						<details
							key={index}
							className={styles.details}>
							<summary className={styles.summary}>{table.table_name}</summary>
							<ul className={styles.ul}>
								{table.columns.map((column, idx) => (
									<li
										key={idx}
										className={styles.li}>
										{column.column_name} ({column.data_type})
									</li>
								))}
							</ul>
						</details>
					))}
				</div>
			) : (
				<div className={styles.loadingContainer}>
					<Loading />
				</div>
			)}
		</div>
	);
};

export default SchemaExplorer;
