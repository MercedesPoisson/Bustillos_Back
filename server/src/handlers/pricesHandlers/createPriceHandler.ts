import { Request, Response } from "express";
import createPriceController from "../../controllers/pricesControllers/createPriceController";
import { PriceAttributes } from "../../models/interfaces";

const createPriceHandler = async (req: Request, res: Response) => {
    const priceArray: string[] = [
    "id_price",
    "id_apartment",
    // "key_word",
    // "guests_number",
    "price_per_night_pesos",
    "price_per_night_dolar",
    // "start_date",
    // "end_date",
    // "currency",
    "season",
    ]
    const newPrice = req.body as PriceAttributes;
    try {
        const response = await createPriceController(newPrice);

        if (response.success) {
            res.status(201).json(response.data); // 201: Created
        } else {
            res.status(400).json({ error: response.error }); // 400: Bad Request
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor." }); // 500: Internal Server Error
    }
};

export default createPriceHandler;

