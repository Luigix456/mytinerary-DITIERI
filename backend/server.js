require('dotenv').config()
require('./config/database')
const cors = require('cors')
const express = require('express')
const Router = require('./routes/routes')
/* const itinerariesRouter = require("./routes/itinerariesroutes"); */
/* const activitiesRouter = require("./routes/activitiesroutes"); */
const PORT = 4000
const passport = require("passport")
const app = express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)
/* app.use("/api", itinerariesRouter); */
/* app.use("/api", activitiesRouter); */
app.listen(PORT,()=> console.log('server ready on PORT' + PORT))