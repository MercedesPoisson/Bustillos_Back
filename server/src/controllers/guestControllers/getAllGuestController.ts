import sequelize from "../../db";

const { Guests } = sequelize.models;

const getAllGuestsController = async (id_rent: string) => {
    try {
        const guests = await Guests.findAll({
            where: {
                id_rent
            }
        });
        return guests;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los huéspedes")
    }
}

export default getAllGuestsController;