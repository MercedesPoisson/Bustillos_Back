import { Router } from "express";
import createGuestHandler from "../../handlers/GuestsHandlers/createGuestHandler";
import getAllGuestsHandler from "../../handlers/GuestsHandlers/getAllGuestsHandler";

const guestRoutes = Router();

guestRoutes.post("/", createGuestHandler);
guestRoutes.get("/:id_rent", getAllGuestsHandler);

export default guestRoutes;