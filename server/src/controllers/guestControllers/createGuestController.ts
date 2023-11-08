import sequelize from '../../db';
import { Request, Response } from 'express';
const { Guests } = sequelize.models; // Importa el modelo de la base de datos

const createGuestController = async (req: Request, res: Response) => {
  try {
    const guestData = req.body;

    // Verifica que idRent sea un número válido
    if (!guestData || !Array.isArray(guestData)) {
      return res.status(400).json({ error: 'Invalid request data' });
    }

    // Crea los acompañantes y los asocia a la reserva
    const createdGuests = await Guests.bulkCreate(guestData.map((guest) => ({
      pax_name: guest.pax_name,
      pax_surname: guest.pax_surname,
      pax_dni: guest.pax_dni,
      id_rent: guest.id_rent,
    })));
    console.log("desde el controller", createdGuests);
    
    res.status(201).json(createdGuests);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export default createGuestController;





// import sequelize from "../../db";
// import { GuestsAttributes } from "../../models/interfaces";
// const { Guests } = sequelize.models;

// const createGuestController = async (guestData: GuestsAttributes) => {
//     if (Array.isArray(guestData)) {
//         const guestArray = guestData.map(guest => {
//             return {
//                 pax_name: guest.pax_name,
//                 pax_surname: guest.pax_surname,
//                 pax_dni: guest.pax_dni,
//                 id_rent: guest.id_rent,
//             };
//         });

//         const guests = await Guests.bulkCreate(guestArray);
//         console.log("desde el controlador", guests);

//         return guests;
//     } else {
//         console.error('guests is not an array');
//         return null;
//     }
// }

// export default createGuestController;

