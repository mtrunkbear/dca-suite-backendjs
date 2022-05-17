import { Router } from "express";
const router = Router();

import * as dataCtrl from "../controllers/data.controller";

router.get("/:symbol", dataCtrl.getDataBySymbol);

export default router;
