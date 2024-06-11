import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.frankfurter.app";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function callLatest(req,res) {
  try {
    const result = await axios.get(API_URL + "/latest");
    const rates = result.data.rates;
    res.render("index.ejs", { rates });
  } catch (error) {
    res.render("index.ejs", { rates: null, error: "Error fetching data" });
  }
}

app.get("/", (req, res) => {
  callLatest(req,res);
});

app.get("/latest", (req, res) => {
  callLatest(req,res);
});

app.get("/fromSpecificCurrencyPage", async (req, res) => {
    res.render("fromCurr.ejs", { rates: null, error: " " });
});

app.post("/fromSpecificCurrency", async (req, res) => {
  try {
    const fromCurrencyCode = req.body.fromCurrCode;
    const result = await axios.get(API_URL + "/latest?from="+fromCurrencyCode);
    const rates = result.data.rates;
    console.log(rates);
    res.render("fromCurr.ejs", { fromCurrCode:fromCurrencyCode, rates });
  } catch (error) {
    res.render("fromCurr.ejs", { rates: null, error: "Error fetching data" });
  }
});

app.get("/betweenSpecificCurrenciesPage", async (req, res) => {
   res.render("toCurr.ejs", { rates: null, error: " " });
});

app.post("/betweenSpecificCurrencies", async (req, res) => {
  try {
    const fromCurrencyCode = req.body.fromCurrCode;
    const toCurrencyCode = req.body.toCurrCode;
    const result = await axios.get(API_URL + "/latest?to="+fromCurrencyCode+","+toCurrencyCode);
    const rates = result.data.rates;
    res.render("toCurr.ejs", { fromCurrCode:fromCurrencyCode, toCurrCode:toCurrencyCode, rates });
  } catch (error) {
    res.render("toCurr.ejs", { rates: null, error: "Error fetching data" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});