import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,postJob)
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
router.route("/get/:id").put(isAuthenticated, getJobById);  //to make sure that an suthenticated person is updatimg, we use a middleware 

export default router; 