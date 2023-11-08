import { Router } from "express";
import apartmentsRoutes from "./apartmentsRoutes/index";
import rentsRoutes from "./rentsRoutes/index";
import servicesRoutes from "./servicesRoutes";
import pricesRoutes from "./pricesRoutes";
import guestRoutes from "./guestRoutes";

const router: Router = Router();

router.use("/apartments", apartmentsRoutes);
router.use("/rents", rentsRoutes);
router.use("/services", servicesRoutes)
router.use("/prices", pricesRoutes)
router.use("/guests", guestRoutes)

export default router;