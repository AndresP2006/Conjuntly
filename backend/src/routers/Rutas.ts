import { Router } from "express";
import { Request, Response } from "express";
import userControllers from "../controllers/user.controllers";
import visitaControllers from "../controllers/visita.controllers";
import personaControllers from "../controllers/persona.controllers";

const router = Router();

//Rutas del sistema
router.post("/login", userControllers.Login);
router.post("/usuario", personaControllers.CrearPersona);
router.get("/Contador", visitaControllers.Contador);
//Ruta falsa
async function rutaFalsa(req: Request, res: Response): Promise<void> {
  res.status(404).json({ message: "Ruta no encontrada" });
}
router.use(rutaFalsa);

export default router;
