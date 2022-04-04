require('dotenv').config()
require('./config/database')
const cors = require('cors')
const express = require('express')
const Router = require('./routes/routes')
/* const itinerariesRouter = require("./routes/itinerariesroutes"); */
const PORT = 4000   
const passport = require("passport")
const app = express()
const path = require('path')
//middlewares
app.use(cors());
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)

//SI LA APLICACION SE ENCUENTRA EN PRODUCCION
if (process.env.NODE_ENV ==='production') {
    //LA CARPETA DE ARCHIVOS ESTATICOS VA A SER LA RUTA SIGUIENTE
    app.use(express.static('client/build'))
    //CUALQUIER PEDIDO DE TIPO GET
    app.get('*', (req, res) => {
        //VA A DEVOLVER EL ARCHIVO index.html
        //PORQUE ES LA UNICA VISTA YA QUE REACT SE ENCARGA DE RENDERIZAR TODAS LAS 'PAGINAS' DEL SITIO  
        res.sendFile(path.join(__dirname + /client/build/index.html))
    })
}

/* app.use("/api", itinerariesRouter); */
/* app.listen(PORT,()=> console.log('server ready on PORT' + PORT)) */
app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log('server listening on PORT ${process.env.PORT || 4000}'))