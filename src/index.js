import express from "express";
import cors from "cors";
import dataRoute from "./routes/data.route";

const app = express();
const PORT = process.env.PORT || 4000


app.listen(PORT);

const corsOptions = {
  origin: "https://dolarcostaverage.netlify.app",
};

app.use(cors(corsOptions));

console.log("Server on PORT:", PORT);

app.use("/api/data", dataRoute);
