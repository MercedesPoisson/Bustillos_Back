import { Router } from "express";
import getPricesHandler from "../../handlers/pricesHandlers/getPricesHanler";
import createPriceHandler from "../../handlers/pricesHandlers/createPriceHandler";

const pricesRoutes = Router();

pricesRoutes.get("/", getPricesHandler);
pricesRoutes.post("/", createPriceHandler);

export default pricesRoutes;