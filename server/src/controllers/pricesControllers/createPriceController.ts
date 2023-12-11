import sequelize from "../../db";
import { PriceAttributes } from "../../models/interfaces";

const { Prices } = sequelize.models;

const createPriceController = async (newPrice: Partial<PriceAttributes>): Promise<{ success: boolean, data?: PriceAttributes, error?: string }> => {
    try {
        const existingPrice = await Prices.findOne({
            where: {
                id_apartment: newPrice.id_apartment,
                season: newPrice.season,
            }
        });

        if (existingPrice) {
            return { success: false, error: "Ya existe un precio para esta temporada y departamento." };
        }

        const createdPrice = await Prices.create(newPrice);
        return { success: true, data: createdPrice };
    } catch (error: any) {
        console.error(error);
        return { success: false, error: "Error al crear el precio. Mensaje del servidor: " + error.message };
    }
};

export default createPriceController;