const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const ratings = {};
const api = {
  url: "https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1",
  key: "gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee",
};

app.get("/startups", async (req, res) => {
  const respData = await fetch(api.url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-api-key": api.key,
    },
  });
  const resp = await respData.json();
  return res.json(resp);
});

app.get("/startups/rate", async (req, res) => {
  const rates = { proposta: [], pitch: [], desenvolvimento: [] };

  Object.keys(ratings).forEach((id) => {
    const types = ratings[id];
    Object.keys(types).forEach((type) => {
      rates[type].push({ id, count: types[type] });
    });
  });

  return res.status(200).json(rates);
});

app.get("/startups/:id", async (req, res) => {
  const { id } = req.params;
  const respData = await fetch(api.url + `/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-api-key": api.key,
    },
  });
  const resp = await respData.json();
  return res.json({ ...resp, id, rate: ratings[id] });
});

app.post("/startups/rate/:id", async (req, res) => {
  const { id } = req.params;
  const { rate, type } = req.body;

  if (!ratings[id]) {
    ratings[id] = {};
  }
  ratings[id][type] = rate;
  return res.status(200).json({ message: "ok" });
});

app.listen(5000, () => {
  console.log("Server is running...");
});
