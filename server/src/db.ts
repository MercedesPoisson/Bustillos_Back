require("dotenv").config();
import { Sequelize } from "sequelize";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
import User from "./models/User";
import Apartment from "./models/Apartment";
import Rent from "./models/Rent";
import Service from "./models/Service";
import Price from "./models/Price";
import Discount from "./models/Discounts";
import Guest from "./models/Guests";

const sequelize: any = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bustillos7500`, {
    logging: false, 
    native: false, 
  });
  
User(sequelize);
Apartment(sequelize);
Rent(sequelize);
Service(sequelize);
Price(sequelize);
Discount(sequelize);
Guest(sequelize);

const { Users, Apartments, Rents, Services, Prices, Discounts, Guests } = sequelize.models;

Users.hasMany(Rents, { foreignKey: "id_user" });
Services.belongsToMany(Apartments, { through: "Apartments_Services" });
Apartments.belongsToMany(Services, { through: "Apartments_Services" });
Apartments.hasMany(Rents, { foreignKey: 'id_apartment' }); 
Rents.belongsTo(Users, { foreignKey: 'id_user' });
Rents.belongsTo(Apartments, { foreignKey: 'id_apartment' });
Discounts.belongsToMany(Rents, { through: "Rents_Discounts" }); 

//faltan las relaciones con la tabla price

// Relación uno a muchos entre Apartments y Price
Apartments.hasMany(Prices, { foreignKey: 'apartment_id' });
Prices.belongsTo(Apartments, { foreignKey: 'apartment_id' });

// Relación uno a muchos entre Rents y Price
Rents.hasMany(Prices, { foreignKey: 'rent_id' });
Prices.belongsTo(Rents, { foreignKey: 'rent_id' });

Rents.hasMany(Guests, { foreignKey: 'rent_id' });
export default sequelize;