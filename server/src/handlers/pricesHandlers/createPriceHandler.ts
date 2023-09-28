import { Request, Response } from "express";
import createPriceController from "../../controllers/pricesControllers/createPriceController";
import { PriceAttributes } from "../../models/interfaces";

const createPriceHandler = async (req: Request, res: Response) => {
    const priceArray: string[] = [
    "id_price",
    "id_apartment",
    "key_word",
    "guests_number",
    "price_per_night",
    "start_date",
    "end_date",
    "currency",
    ]
    const newPrice = req.body as PriceAttributes;
    try {
        const response = await createPriceController(newPrice)
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el precio" });
    }
}   

export default createPriceHandler;

