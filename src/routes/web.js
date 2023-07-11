import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoutes = (app) => {
    // app.Method(PATH, HANDLER)
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/data', homeController.getdata);
    router.post('/signup', homeController.signup);
return app.use("/", router);}
export default initWebRoutes;