import sequelize from "../../db";

const { Guests } = sequelize.models;

const getAllGuestsController = async () => {
    try {
        const guests = await Guests.findAll();
        return guests;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los huéspedes")
    }
}

export default getAllGuestsController;