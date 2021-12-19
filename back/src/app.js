require('dotenv').config();
require('./dal/index')(); //init db connection
const config = require('./config');
const express = require('express');
const cors = require('cors');
const useRouter = require('./controllers/index')
const startCron = require('./jobs/index')
const passport = require('passport');
const usePassportStrategy = require("./middlewares/passport");



const app = express();
app.use(cors());
app.use(express.text())
app.use(express.json());
app.use(passport.initialize())
useRouter(app);
usePassportStrategy(passport)


app.listen(config.app.port, async() => {
    console.log(`Server started on the ${config.app.port} port`);
})
startCron()