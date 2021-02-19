import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompanies, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany)
router.route("/get").get(isAuthenticated,getCompanies);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated, updateCompany);  //to make sure that an suthenticated person is updatimg, we use a middleware 

export default router;