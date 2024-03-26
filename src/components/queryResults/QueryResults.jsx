"use client";
import styles from "./queryResults.module.css";

function formatDate(dataObj){
  return dataObj.toLocaleString();
}

const QueryResults = ({ queryResults }) => {
  // in case no query was executed yet 
  if (!queryResults) {
    return (
      <div className={styles.container}>
        Press "Execute Query" button to run your query.
      </div>
    );
  }

  // in case of query errors like syntax error 
  if (typeof queryResults === "string") {
    console.log("data is string")
    const data = JSON.parse(queryResults);

    if (data.message) {
      return (
        <>
          <h3>Error:</h3>
          <div>{data.message}</div>
        </>
      );
    } else {
      // console.log(queryResults);
      // console.log(data);

      return (
        <>
          <div>Unexpected error...</div>
        </>
      );
    }
  }

  // in case of query resulting no results
  if (queryResults.length === 0) {
    return <>
       <h3>No Results:</h3>
          <div>The query results are empty</div>
    </>
  }

  // in case everything works as intended (not likely)
  const keys = Object.keys(queryResults[0]);

  console.log("Data should be object")

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
                  <td key={i}> {typeof row[key] !== "object" ? row[key] : formatDate(row[key]) }</td>
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
