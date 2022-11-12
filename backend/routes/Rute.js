import express from "express";
import{
    getDate,
    getDateById,
    saveData,
    updateData,
    deleteData
} from "../controller/controller.js";

const router = express.Router();

router.get('/input', getDate);
router.get('/input/:id', getDateById);
router.post('/input', saveData);
router.patch('/input/:id', updateData);
router.delete('/input/:id', deleteData);
 
export default router;