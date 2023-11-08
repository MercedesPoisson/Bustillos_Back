import { DataTypes, Model, Sequelize } from 'sequelize';
import { GuestsAttributes } from './interfaces';

interface GuestsInstance extends Model<GuestsAttributes>, GuestsAttributes {}

const Guest = (sequelize: Sequelize) => {
  return sequelize.define<GuestsInstance>("Guests", {
    id_guest: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
    pax_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pax_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pax_dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Rents",
        key: "id_rent",
      },
    },
  });
};

export default Guest;