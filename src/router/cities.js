import express from "express";
import citiesController from "../controllers/citiesController";

const router = express.Router()

router.get('/', citiesController.getCities);

router.post('/', citiesController.createCity);


export default router;