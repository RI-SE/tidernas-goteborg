import json
import sys
import time

# Do data stuff 

# Compose return object
data = {
    "query": sys.argv[1],
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
time.sleep(5)

# Print data as JSON
print(json.dumps(data))