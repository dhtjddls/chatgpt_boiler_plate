const express = require("express");
const port = 8000;
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, console.log(`http://localhost:${port}`));

// Set up your API key and endpoint URL
const apiKey = "YOUR_API_KEY_HERE";
const endpointUrl =
  "https://api.openai.com/v1/engine/davinci-codex/completions";

// Set up your request data [ 프론트에서 받아온 인풋값 prompt 넣어주기]
const prompt = "Hello, ";
const maxTokens = 5;

// Set up the request configuration
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

// Make the API request
axios
  .post(
    endpointUrl,
    {
      prompt: prompt,
      max_tokens: maxTokens,
    },
    config
  )
  .then((response) => {
    console.log(response.data.choices[0].text);
  })
  .catch((error) => {
    console.log(error);
  });
