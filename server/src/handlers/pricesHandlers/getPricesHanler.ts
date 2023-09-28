import { Request, Response } from "express";
import getPricesController from "../../controllers/pricesControllers/getPricesController";

const getPricesHandler = async (req: Request, res: Response) => {
    try {
        const prices = await getPricesController();
        res.json(prices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los precios" });
    }
}

export default getPricesHandler;