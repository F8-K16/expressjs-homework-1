import express, { Request, Response } from "express";
import authRoute from "./routes/auth.route";

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/api/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express TypeScript");
});

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
