// server/server.js
const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/process', async (req, res) => {
  try {
    const userInput = req.body.input;

    // Run Python script
    const pythonProcess = spawn('python3', ['gemini_res.py', userInput]); // Pass userInput as argument
    let pythonOutput = '';
    let pythonError = '';

    pythonProcess.stdout.on('data', (data) => {
      pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      pythonError += data.toString();
    });

    pythonProcess.on('close', async (code) => {
      if (code === 0) {
        try {
          const parsedOutput = JSON.parse(pythonOutput);
          const outputString = parsedOutput.result;

          res.json({ result: outputString });
        } catch (parseError) {
          console.error('Error parsing Python output:', parseError);
          res.status(500).json({ error: 'Error processing Python output' });
        }
      } else {
        console.error('Python script exited with code:', code);
        console.error('Python error output:', pythonError);
        res.status(500).json({ error: 'Python script execution failed' });
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});