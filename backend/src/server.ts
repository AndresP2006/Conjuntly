import express from "express";
import router from "./routers/Rutas";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.use("/cda", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
