#Network Layers on Client and Server
#Design a simple HTTP client-server communication in any language

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.get("/hello")
def hello():
    return jsonify(message="Hello from server!")

@app.post("/echo")
def echo():
    data = request.get_json(silent=True) or {}
    return jsonify(received=data)

if __name__ == "__main__":
    # accessible at http://127.0.0.1:5000
    app.run(debug=True)
