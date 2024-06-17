
import { configDotenv } from 'dotenv';
configDotenv()

import  express  from 'express';
const app = express();

import FieldsRouter from './routers/FieldsRouter.js';


const hostname = process.env.HOST_NAME;//'127.0.0.1';//localhost
const port = process.env.PORT;

app.use(express.json());//will extract data from body - so we don't ned to register to 'data' and 'end' events


app.use('/api/fields', FieldsRouter);

app.use('/', (req, res) => {
    res.send('welcome to our api');
})
//app.use()//handle errors

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
