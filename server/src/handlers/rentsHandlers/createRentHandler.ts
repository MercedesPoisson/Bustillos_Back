import { Request, Response } from "express";
import createRentController from "../../controllers/rentsControllers/createRentController";



const createRentHandler = async (req: Request, res: Response) => {
    const rentArray: string[] = [
    "id_rent",
    "id_user",
    "name",
    "surname",
    "phone",
    "mail",
    "cuit_dni",
    "id_apartment",
    "start_date",
    "end_date",
    "nights_number",
    "guests_number",
    "adults_number",
    "kids_number",
    "babies_number",
    "pets",
    "currency",
    "total_amount",
    "deposit",
    "exchange_rate",
    "deposit_amount",
    "balance_exchange_rate",
    "balance",
    "pre_viaje",
    "payment_status",
    "payment_date",
    "review_status",
    "creation_date",
    "is_active",
    "source",
    // bed_type
    "room_one",
    "room_two",
    "room_three",
    "room_estar",
    "car",
    "car_plate",
    "booking_number",
];
try {
    const rentData = req.body;
    console.log("rentData:", rentData);

    // Verifica que rentData sea un objeto antes de continuar
    if (typeof rentData === 'object' && rentData !== null) {
        // Verifica que el objeto rentData no esté vacío
        if (Object.keys(rentData).length === 0) {
            return res.status(400).json({ error: "Invalid rent data provided" });
        }
    } else {
        return res.status(400).json({ error: "Invalid rent data provided" });
    }

    const newRent = await createRentController(rentData);
    res.status(201).json(newRent);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear una reserva" });
}
};

export default createRentHandler;