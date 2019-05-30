const { PythonShell } = require('python-shell');

const defaultOptions = {
    mode: 'text',
    pythonPath: '/usr/local/bin/python',
    args: []
};

const runPythonScript = (scriptPath, pythonPath, args) => {
	return new Promise((resolve, reject) => {
		if(!scriptPath.length) {
			return reject(`Invalid script path`);
		}

		if(!scriptPath.includes('.py')) {
			return reject(`script path doesn't points to python script file`);
		}

		const { args: defaultArgs } = defaultOptions;
		const cmdArguments = [...args, ...defaultArgs];

		const options = {
			mode: defaultOptions.mode,
			pythonPath: pythonPath && pythonPath.length ? pythonPath : defaultOptions.pythonPath,
			args: [...args, ...defaultArgs],
		};

		PythonShell.run(scriptPath, options, (error, results) => {
		    if(error){
		    	return reject(error);
		    }

		    // results is an array consisting of messages collected during execution
		    // i.e. all print statements

		    if(results.length > 1) {
		    	//Multiple print statements are used in python file
		    	return resolve(results);
		    } else {
		    	//Single print statement is used
		    	try{
		    		//It's a json
		    		const result = JSON.parse(results[0]);
		    		return resolve(result);
		    	} catch(error) {
		    		//It's not json
		    		return resolve(results);
		    	}
		    }
		});
	});
};

exports.runPythonScript = (scriptFp = '', { pythonPath = '', args = [] }) => runPythonScript(scriptFp, pythonPath, args);



