import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// Database config
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ux_arena",
  password: "Pip432po0",
  port: 5432,
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Random prompt API
app.get("/api/prompts", async (req, res) => {
    const result = await pool.query("SELECT * FROM prompts");
    res.json(result.rows);
  });
  

app.listen(5000, () => console.log("Server running on port 5000"));
