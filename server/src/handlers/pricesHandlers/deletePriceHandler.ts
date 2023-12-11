import deletePriceController from "../../controllers/pricesControllers/deletePriceController";

const deletePriceHandler = async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const response = await deletePriceController(id);
        res.status(200).json({ response });
    } catch (error) {
        if (error instanceof Error) { // Comprobación de tipo
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error desconocido" });
        }
    }
}

export default deletePriceHandler;