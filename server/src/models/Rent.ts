import { DataTypes, Model, Sequelize } from 'sequelize';
import { RentsAttributes } from './interfaces';

interface RentsInstance extends Model<RentsAttributes>, RentsAttributes {}

const Rent = (sequelize: Sequelize) => {
    return sequelize.define<RentsInstance>("Rents", {
        id_rent: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.STRING,
            references: {
                model: "Users",
                key: "id_user"
            }
        },
        name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        cuit_dni: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        id_apartment: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Apartments",
                key: "id_apartment"
            }
        },
        start_date: {
            type: DataTypes.DATEONLY, 
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        nights_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guests_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adults_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        kids_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        babies_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pets: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deposit: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        exchange_rate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deposit_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        balance_exchange_rate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pre_viaje: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        payment_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        review_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull: false
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //para especificacion de camas en cada reserva
        room_one: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_two: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_three: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_estar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        car: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        car_plate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        booking_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}
export default Rent;