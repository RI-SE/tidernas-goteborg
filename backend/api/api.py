import json
import sys

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

# Print data as JSON
print(json.dumps(data))