require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/db");
//const userRoutes = require("./controllers/users");
//const authRoutes = require("./controllers/auth");
const routes = require ('./routes/routes')

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", routes);
app.use("/api/auth", routes);

const port = process.env.PORT
app.listen(port, console.log(`Listening on port ${port}...`));
