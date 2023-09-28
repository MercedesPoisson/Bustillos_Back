import { Router } from "express";
import apartmentsRoutes from "./apartmentsRoutes/index";
import rentsRoutes from "./rentsRoutes/index";
import servicesRoutes from "./servicesRoutes";
import pricesRoutes from "./pricesRoutes";

const router: Router = Router();

router.use("/apartments", apartmentsRoutes);
router.use("/rents", rentsRoutes);
router.use("/services", servicesRoutes)
router.use("/prices", pricesRoutes)

export default router;