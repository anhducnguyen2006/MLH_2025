from google import genai 
from flask import Flask, request 
import json 

app = Flask(__name__) 

@app.route('/genai', methods=['POST']) 
def genai(): 
    data = request.get_json() 
    response = genai(data) 
    return json.dumps(response); 