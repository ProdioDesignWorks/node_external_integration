const { runPythonScript } = require('./python-executer');
const options = {
	pythonPath: '',
	args: ['Pawan', 'Wagh'],
};
runPythonScript('sample_with_json_output.py', options).then(
	res => console.log(res)
).catch(
	error => console.error(error)
);


runPythonScript('sample_with_error.py', options).then(
	res => console.log(res)
).catch(
	error => console.error("error:", error)
);