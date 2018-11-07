require("dotenv").config();
import express from "express";
import path from "path";
import morgan from "morgan";
import RootController from "./controllers/RootController";
import session from 'express-session';

const app = express();

// View engine config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Logs
app.use(morgan("dev"));

//session
app.use(session({secret: "une chaîne de caractères", cookie: { maxAge: 60000 }}))

// Url params middleware
app.use(express.urlencoded({ extended: true }));

// Set static folder
app.use("/public", express.static("public"));
app.use(
  "/public/materialize",
  express.static("node_modules/materialize-css/dist")
);
app.use("/public/jquery", express.static("node_modules/jquery/dist"));

// Controllers
app.use("/", RootController);

// Start app on port APP_PORT
const port = process.env.APP_PORT || 3000;
export const server = app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);

export default app;
