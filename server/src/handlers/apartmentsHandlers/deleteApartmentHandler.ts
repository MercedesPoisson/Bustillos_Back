import deleteApartmentController from "../../controllers/apartmentControllers/deleteApartmentController";

const deleteApartmentHandler = async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const response = await deleteApartmentController(id);
        res.status(200).json({ response });
    } catch (error) {
        if (error instanceof Error) { // Comprobación de tipo
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error desconocido" });
        }
    }
}

export default deleteApartmentHandler;