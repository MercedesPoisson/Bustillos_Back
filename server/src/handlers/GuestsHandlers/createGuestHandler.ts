import { Request, Response } from 'express';
import createGuestController from '../../controllers/guestControllers/createGuestController'; // Importa el controlador

const createGuestHandler = async (req: Request, res: Response) => {
  try {
    await createGuestController(req, res);
    console.log("desde el handler", req.body);
    
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export default createGuestHandler;

