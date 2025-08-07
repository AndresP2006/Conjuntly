import express from "express";
import router from "./routers/Rutas";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/cda", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
