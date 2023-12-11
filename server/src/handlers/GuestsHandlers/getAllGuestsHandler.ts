import { Request, Response } from "express";
import getAllGuestsController from "../../controllers/guestControllers/getAllGuestController"

const getAllGuestsHandler = async (req: Request, res: Response) => {
    try {
        const guests = await getAllGuestsController();
        res.json(guests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los huéspedes" });
    }
}

export default getAllGuestsHandler;