import { Router } from "express";
import createAppHandler from "../../handlers/apartmentsHandlers/createAppHandler";
import deactivateAppHandler from "../../handlers/apartmentsHandlers/deactivateAppHandler";
import getAllAppHandler from "../../handlers/apartmentsHandlers/getAllAppHandler";
import updateAppHandler from "../../handlers/apartmentsHandlers/updateAppHandler";
import deleteApartmentHandler from "../../handlers/apartmentsHandlers/deleteApartmentHandler";

const apartmentsRoutes = Router();

apartmentsRoutes.post("/", createAppHandler);
apartmentsRoutes.put("/update/:id/", updateAppHandler);
apartmentsRoutes.put("/:id/deactivate", deactivateAppHandler);
apartmentsRoutes.get("/", getAllAppHandler);
apartmentsRoutes.delete("/:id", deleteApartmentHandler);

export default apartmentsRoutes;