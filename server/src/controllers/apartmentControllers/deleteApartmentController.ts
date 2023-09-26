import sequelize from "../../db";

const deleteApartmentController = async (id_apartment: number) => {
    try {
        const deleteAparment = await sequelize.models.Apartments.destroy({
            where: {
                id_apartment: id_apartment,
            },
        });
        return;
    } catch (error: any) {
        if(error) {
            throw new Error(error.message);
        } else {
            throw new Error("Ocurrio un Error");
        }
    }
}

export default deleteApartmentController;