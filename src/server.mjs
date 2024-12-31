import express from "express";
import * as script from "./script.mjs";

const app = express();
const PORT = 3000;

app.use(express.json());

// barebones testing
app.post("/api/run-script", (req, res) => {
  res.json({ message: "Script executed successfully!" });
});

// start server
app.listen(PORT, () => {
  console.log("testMessage");
  console.log(`Server running at http://localhost:${PORT}`);
});
