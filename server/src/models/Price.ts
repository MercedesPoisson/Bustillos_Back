import { DataTypes, Model, Sequelize } from "sequelize";
import { PriceAttributes } from "./interfaces";
import sequelize from "../db";

interface PriceInstance extends Model<PriceAttributes>, PriceAttributes { }

const Price = (sequelize: Sequelize) => {
    sequelize.define<PriceInstance>("Prices", {
        id_price: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        id_apartment: {
            type: DataTypes.INTEGER,
            references: {
                model: "Apartments",
                key: "id_apartment"
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // key_word: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // guests_number: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        price_per_night_pesos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_per_night_dolar: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // start_date: {
        //     type: DataTypes.DATEONLY, 
        //     allowNull: false
        // },
        // end_date: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false
        // },
        // currency: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
    })
}

export default Price