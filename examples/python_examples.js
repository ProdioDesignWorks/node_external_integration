const { runPythonScript } = require('../');
const path = require('path');

const filePath = path.resolve(__dirname, '../python-scripts/python_crawler_executer.py');
const crawlerPath = path.resolve(__dirname, '../python-scripts/sample_with_json_output.py');
const options = {
	pythonPath: '/usr/local/bin/python',
	args: [crawlerPath],
};

runPythonScript(filePath, options).then(
	res => {
		const result = JSON.parse(res[0]);
		console.log(result);
	}
).catch(
	error => console.error(error)
);