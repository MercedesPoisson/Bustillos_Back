import { Request, Response } from "express";
import getAllGuestsController from "../../controllers/guestControllers/getAllGuestController"

const getAllGuestsHandler = async (req: Request, res: Response) => {
    try {
        const { id_rent } = req.params;
        const guests = await getAllGuestsController(id_rent);
        res.json(guests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los huéspedes" });
    }
}

export default getAllGuestsHandler;