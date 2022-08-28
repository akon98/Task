from flask import Flask, render_template
from flask import request
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def client():
    return render_template('client.html')

@app.route("/submit", methods = ['POST'])
def toUpper():
    decoded = request.get_json()
    res = decoded["value"].upper()
    #print(res)
    res = { "value": res }
    print(json.dumps(res))
    return json.dumps(res)

if __name__ == "__main__":
    app.run(host='0.0.0.0',threaded=True)