import subprocess
import sys 

crawler_name = sys.argv[1]
# subprocess.call(["python" , crawler_name])

s = subprocess.check_output(["python", crawler_name])
# s = subprocess.check_output(["ls"])
print(s)