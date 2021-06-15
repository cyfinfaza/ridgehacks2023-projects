import csv
import sys
import json

try:
	path = sys.argv[1]
except:
	print("Must specify a file.")

with open(path) as csvfile:
    inputData = list(csv.reader(csvfile, delimiter=',', quotechar='"'))

NAME_INDEX = 2
CREATOR_INDEX = 3
LINK_INDEX = 4

outputData = []

for row in inputData[1:]:
	outputData.append({
		'name':row[NAME_INDEX],
		'creators':row[CREATOR_INDEX],
		'link':row[LINK_INDEX],
	})

with open('projects.json', 'w') as file:
	file.write(json.dumps(outputData))