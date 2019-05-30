import os
import sys 

crawler_name = sys.argv[1]

os.chdir('/home/ubuntu/swyp-backend/scrapy_crawler/')
command = "/home/ubuntu/.local/bin/scrapy crawl " + crawler_name
return_code = os.system(command)
print(return_code)