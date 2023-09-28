import sequelize from "../../db";

const { Prices } = sequelize.models;

const getPricesController = async () => {
    try {
        const prices = await Prices.findAll();
        return prices;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los precios")
    }
}

export default getPricesController;