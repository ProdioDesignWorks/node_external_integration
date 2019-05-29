import json

# Whatever you print in this python file willbe collected and given to nodejs as output
# therefore there's only single json print statement which is treated as output of python file
obj = {
	'status': True,
	'message': 'Ok'
}
res = json.dumps(obj)
print(res)