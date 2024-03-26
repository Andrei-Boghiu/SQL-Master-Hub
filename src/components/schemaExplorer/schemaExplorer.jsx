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
        <div className={styles.tableList}>
          {schemaResults.map((tableObj, index) => (
            <span className={styles.table} key={index}>
              {Object.values(tableObj)[0]}
            </span>
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