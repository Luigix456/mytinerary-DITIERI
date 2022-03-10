const Itineraries = require('../models/itineraries')

const itinerariesController = {
    obtainItineraries: async (req, res)=> {
        let itinerary
        let error = null
        try {
            itinerary = await Itineraries.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerary},
            success: error ? false : true,
            error: error
        })
    },
    loadItinerary: async(req,res)=>{         /* Controlador para cargar una nueva ciudad desde el front. */
        console.log(req.body)
        const {name, image, description,imageUser,userName,price,hashtags,hours,likes,activities,comments} = req.body
        new Itineraries({name, image,imageUser, description,userName,price,hashtags,hours,likes,activities,comments}).save()   /* salva  */
            /* .then((respuesta) => res.json({respuesta})) */
            .then((respuesta) => res.json({ respuesta }))
            .catch(error => res.json({ error }))
    },

    deleteItinerary: async (req,res)=>{
        const id = req.params.id
           await Itineraries.findOneAndDelete({_id:id})
           .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))

    },

    modifyItinerary: async (req, res)=>{
        const id = req.params.id
        const itinerary = req.body.dataInput

        let itineraryb = await Itineraries.findOneAndUpdate({_id:id}, itinerary)
         console.log(itineraryb)

    },

}
module.exports = itinerariesController