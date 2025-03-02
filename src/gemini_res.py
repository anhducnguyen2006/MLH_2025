# gemini_res.py
from google import genai
import json
import os

def potential_disease(symptoms):
    prompt = f"When a person has these symptoms: {symptoms}, what is the diagnosis? Talk like a personal doctor. Keep it short."

    genai.configure(api_key=os.getenv("GEMINI_API_KEY")) # Configure the api key.
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)
    print(prompt)

    return json.dumps({"result": response.text})

if __name__ == "__main__":
    import sys
    symptoms = sys.argv[1]
    print(potential_disease(symptoms))