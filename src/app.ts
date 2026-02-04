import express, { Request, Response } from "express";
import indexRoute from "./routes/index.route";

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/api", indexRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express TypeScript");
});

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

export default app;
