import express from "express";
import musicRoute from "./routes/music-routes"
const app = express();

app.use(express.json());

app.use("/api/music", musicRoute);

export default app;
