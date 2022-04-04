const Cities = require('../models/cities')

const citiesController = {
    obtainCities: async (req, res)=> {
        let cities
        let error = null
        try {
            cities = await Cities.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {cities},
            success: error ? false : true,
            error: error
        })
    },
    loadCity: async(req,res)=>{         /* Controlador para cargar una nueva ciudad desde el front. */
        console.log(req.body)
        const {name, continent, descripcion} = req.body.dataInput
        new Ciudades({name:name, 
                     continent:continent,
                     descripcion: descripcion}).save()   /* salva  */
            .then((respuesta) => res.json({respuesta}))
    },

    deleteCity: async (req,res)=>{
        const id = req.params.id
        
           await Ciudades.findOneAndDelete({_id:id})

    },

    modifyCity: async (req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id}, ciudad)
         console.log(ciudadb)

    },
    consultarCiudadePorID: async (require, response) => {
        const id = require.params.id
        var ciudades

        ciudades = await Cities.findOne({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    }

}
module.exports = citiesController