"use client";

import AceEditor from "react-ace";
import styles from "./queryEditor.module.css";

import Spinner from "../loaders/Spinner";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/snippets/sql";
import "ace-builds/src-min-noconflict/ext-language_tools";

// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/theme-kuroir";
// import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { useState } from "react";

const QueryEditor = ({ query, onQueryChange, executeQuery, loading }) => {
	const [fontSize, setFontSize] = useState(18);

	const handleFontSizeChange = (e) => {
		const newSize = Number(e.target.value);
		setFontSize(newSize);
	};

	const fontSizes = ["14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34"];

	return (
		<div className={styles.container}>
			<div className={styles.editor}>
				<AceEditor
					// placeholder="SELECT * FROM how did I named that db...?"
					mode="sql"
					theme="twilight"
					value={query}
					onChange={onQueryChange}
					name="query-editor"
					height="350px"
					// editorProps={{ $blockScrolling: true }}
					editorProps={{ $blockScrolling: Infinity }}
					width="100%"
					fontSize={fontSize}
					showPrintMargin={false}
					showGutter={true}
					highlightActiveLine={true}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true,
						showLineNumbers: true,
						tabSize: 2,
					}}
				/>
			</div>

			<div className={styles.buttons}>
				<button className={styles.button} onClick={executeQuery}>
					Execute Query
				</button>
				<div className={styles.selectOption}>
					<select id="mySelect" value={fontSize} onChange={handleFontSizeChange}>
						{fontSizes.map((font) => (
							<option key={font} value={font}>
								Font Size {font}
							</option>
						))}
					</select>
				</div>
				{loading && <Spinner />}				
			</div>
		</div>
	);
};

export default QueryEditor;
