// server.jsx
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Auth = require("./models/model.jsx");
const PORT = process.env.PORT || 8080;
const ConnectDB = require("./connection/connection.jsx");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const controller = require("./controller/controller.jsx");
const bodyParser = require("body-parser");

const { ngExpressEngine } = require("@nguniversal/express-engine");
const { AppServerModule } = require("./path-to-your-app-server-module"); // Update with actual path
const {
  provideModuleMap,
} = require("@nguniversal/module-map-ngfactory-loader");
const { provideHttpClient } = require("@nguniversal/common");
const { HttpClientModule, HttpClient } = require("@angular/common/http");
const { join } = require("path");

// Parse JSON request bodies
app.use(express.json());
// Parse cookies
app.use(cookieParser());

// Enables parsing of rich objects and arrays in the URL-encoded format.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
const cors = require("cors");
app.use("*", cors({ credentials: true, origin: true }));

// CORS middleWare
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Morgan in the backend to generate request logs
app.use(morgan("tiny"));

dotenv.config({ path: "./.env" });

// Connection with MongoDB
ConnectDB();

// To Load The routers
app.use("/", require("./routes/router.jsx"));

// Configure HttpClient with fetch
const httpOptions = {
  fetch: typeof fetch === "function" ? fetch.bind(global) : null,
};

// Set up Express engine
app.engine(
  "html",
  ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      provideModuleMap(AppServerModule),
      provideHttpClient(HttpClient, httpOptions),
    ],
  })
);

app.set("view engine", "html");
app.set("views", join(__dirname, "path-to-your-dist-folder/browser")); // Update with actual path

app.post("/api/registerUser", controller.registerUser);
// app.get("/", (req, res) => {
//   res.send("This is the backend of FBook");
// });

app.listen(PORT, () => {
  console.log(`Your Server is running at PORT http://localhost:${PORT}`);
});
