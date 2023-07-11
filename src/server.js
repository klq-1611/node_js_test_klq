import express from 'express';
import configViewengine from './configs/Viewengine';
import initWebRoutes from './routes/web';
import connection from './configs/connectDB';
import bodyParser from 'body-parser';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// set up view engine
configViewengine(app);
// init web routes
initWebRoutes(app);


app.listen(port, () => {
    console.log('Example app listening on port 4000!')
})
