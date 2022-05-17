import express from "express";

import cors from "cors";
import dataRoute from "./routes/data.route";

const app = express();

app.listen(4000);

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

console.log("Server on PORT:", 4000);

app.use("/api/data", dataRoute);
