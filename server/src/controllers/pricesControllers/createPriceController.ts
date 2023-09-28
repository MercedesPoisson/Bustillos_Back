import sequelize from "../../db";
import { PriceAttributes } from "../../models/interfaces";

const { Prices } = sequelize.models;

const createPriceController = async (newPrice: Partial<PriceAttributes>): Promise<PriceAttributes> => {
    try {
        const price: any = await Prices.create(newPrice);
        return price;
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
}
export default createPriceController;