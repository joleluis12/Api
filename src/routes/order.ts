import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/**
 * Esta ruta solo puede acceder las personas que tienen sesion activa!
 * que tengan un JWT valido!
 */
const router = Router();

router.get("/",checkJwt, getItems);

export { router };