import express from "express";
import authRoute from "./routes/auth.route";

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
