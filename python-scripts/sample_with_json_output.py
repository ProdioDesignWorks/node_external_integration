import sys 
import json

# Takes first name and last name via command line arguments and then display them 
# Whatever you print in this python file willbe collected and given to nodejs as output
# therefore there's only single json print statement which is treated as output of python file
full_name = sys.argv[1] + sys.argv[2];
obj = {
	'status': True,
	'message': 'Ok'
}
res = json.dumps(obj)
print(res)