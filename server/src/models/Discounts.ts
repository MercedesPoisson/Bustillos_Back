import { DataTypes, Model, Sequelize } from "sequelize";
import { DiscountsAttributes } from "./interfaces";

interface DiscountsInstance extends Model<DiscountsAttributes>, DiscountsAttributes {}

const Discount = (sequelize: Sequelize) => {
    sequelize.define<DiscountsInstance>("Discounts", {
        id_discount: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

export default Discount