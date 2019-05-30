import subprocess
import sys 

crawler_name = sys.argv[1]
# subprocess.call(["python" , crawler_name])

subprocess.call(["cd", "/home/ubuntu/swyp-backend/scrapy_crawler/"])

s = subprocess.check_output(["/home/ubuntu/.local/bin/scrapy", "crawl", crawler_name])

print(s)