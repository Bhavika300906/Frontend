#Network Layers on Client and Server
#Design a simple HTTP client-server communication in any language

import requests

BASE = "http://127.0.0.1:5000"

# GET request
r1 = requests.get(f"{BASE}/hello")
print("GET /hello ->", r1.status_code, r1.json())

# POST request
payload = {"name": "Bhavna", "course": "Frontend"}
r2 = requests.post(f"{BASE}/echo", json=payload)
print("POST /echo ->", r2.status_code, r2.json())
