import express from "express";
import cors from "cors";
import notesRouter from "./app/routes/notes.route.js";
import db from "./app/models/index.js";

const app = express();

db.sequelize.sync().then(() => {
  console.log("Database is connected !!!");
});

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//use routes
app.use("/api/v1/notes", notesRouter);

//use routes
app.get("/", (req, res) => {
  res.send({ message: "Hey, who are" });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
