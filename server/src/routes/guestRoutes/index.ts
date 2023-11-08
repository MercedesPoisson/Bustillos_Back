import { Router } from "express";
import createGuestHandler from "../../handlers/GuestsHandlers/createGuestHandler";

const guestRoutes = Router();

guestRoutes.post("/", createGuestHandler);

export default guestRoutes;