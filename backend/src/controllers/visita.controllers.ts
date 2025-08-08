import { Request, Response } from "express";
import visitaModels from "../models/visita.models";

//Contador de visitantes que se encuentran dentro de conjunto
async function Contador(req: Request, res: Response) {
  try {
    const conteo = await visitaModels.CountVisit();
    return res.status(200).json({ total: conteo });
  } catch (err) {
    return res.status(500).json({ message: "Error de servidor" + err });
  }
}

export default { Contador };
