import sys
from lcabyg_web_api_py import *

WEB_API_USERNAME = '...'
WEB_API_PASSWORD = '...'

cli = Client(WEB_API_USERNAME, WEB_API_PASSWORD)

for project_path in ['testdata/lcabyg/empty/', 'testdata/lcabyg/reno/', 'testdata/lcabyg/single/']:
    data = NewJob(project=collect_json([project_path]))
    job, output = cli.submit_job(data)  # The results are in the output variable!!!
    print(f'{project_path}: {job.status}')
