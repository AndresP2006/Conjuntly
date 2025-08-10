import { error } from "console";
import apartamentosModels from "../models/apartamentos.models";
import { Request, Response } from "express";

async function Torres(req: Request, res: Response) {
  try {
    const torres = await apartamentosModels.Torre();
    return res.status(200).json({ data: torres });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}

async function Apartamento(req: Request, res: Response) {
  try {
    const { letra } = req.params;

    if (!letra) {
      return res.status(404).json({ message: "Faltan letra de torre" });
    }

    const apartamento = await apartamentosModels.Apartamento(letra);

    return res.status(202).json({ data: apartamento });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}

export default { Torres, Apartamento };
