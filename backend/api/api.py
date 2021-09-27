import json
import sys
import time
import socket, argparse

parser = argparse.ArgumentParser()
parser.add_argument("--query", type=str, help="The Query you wish to run.")
args = parser.parse_args()

# Do data stuff 

# Compose return object
data = {
    # "query": sys.argv[1],
    "query": args.query,
    "items": [
        {
            "id": "imgPath1"
        },
        {
            "id":"imgPath2"
        },
        {
            "id": "imgPath3"
        },
        {
            "id": "imgPath4"
        },
        {
            "id": "imgPath5"
        },
        {
            "id": "imgPath6"
        }
    ]
}

# Fake delay to try asynchronity
# time.sleep(10)

# Print data as JSON
print(json.dumps(data))