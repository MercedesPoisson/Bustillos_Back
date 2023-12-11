import { Router } from "express";
import getPricesHandler from "../../handlers/pricesHandlers/getPricesHanler";
import createPriceHandler from "../../handlers/pricesHandlers/createPriceHandler";
import deletePriceHandler from "../../handlers/pricesHandlers/deletePriceHandler";

const pricesRoutes = Router();

pricesRoutes.get("/", getPricesHandler);
pricesRoutes.post("/", createPriceHandler);
pricesRoutes.delete("/:id", deletePriceHandler);

export default pricesRoutes;