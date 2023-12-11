import sequelize from "../../db";

const deletePriceController = async (id_price: number) => {
    try {
        const deletePrice = await sequelize.models.Prices.destroy({
            where: {
                id_price: id_price,
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

export default deletePriceController;