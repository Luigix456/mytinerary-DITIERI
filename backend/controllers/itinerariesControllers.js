const itineraries = require('../models/itineraries')

const itinerariesController = {
    obtainItineraries: async (req, res)=> {
        let itinerary
        let error = null
        try {
            itinerary = await itineraries.find()
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
        const {name, image, description,imageUser,userName,price,hashtags,hours,likes,activities,comments,cityId} = req.body
        new itineraries({name, image,imageUser, description,userName,price,hashtags,hours,likes,activities,comments,cityId}).save()   /* salva  */
            /* .then((respuesta) => res.json({respuesta})) */
            .then((respuesta) => res.json({ respuesta }))
            .catch(error => res.json({ error }))
    },

    deleteItinerary: async (req,res)=>{
        const id = req.params.id
           await itineraries.findOneAndDelete({_id:id})
           .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))

    },

    modifyItinerary: async (req, res) => {
        const id = req.params.id;
        const itinerary = req.body;

        await itinerary.findOneAndUpdate(
                  { _id: id },
                  itinerary
        ).then((respuesta) => res.json({ respuesta }));
    },
    
    getCityItineraries: async (req,res)=>{
            console.log(req.params.id)
          try{
              const itineraryPerCity = await itineraries.find({cityId:req.params.id})
              console.log(itineraryPerCity)
              res.json({response:itineraryPerCity})
              
          }catch(error){
              console.log(error)
          }
      },


      modifyItinerary: async (req, res) => {
        const id = req.params.id;
        const itinerary = req.body;

        await itinerary.findOneAndUpdate(
                  { _id: id },
                  itinerary
        ).then((respuesta) => res.json({ respuesta }));
},


    getOneItinerary: async(req,res)=>{
        const id = req.params.id;
        console.log(id)
        const data= await Itinerary.find({ _id: id })
        res.json({response:data})
    },
    likeDislike:async (req,res) =>{
        const id=req.params.id //LLEGA POR PARAMETRO DESDE AXIOS
        const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT
      console.log(id);
      console.log(user);
       await Itinerary.findOne({_id: id})
    
        .then((itinerary) =>{
            console.log(itinerary)
            if(itinerary.likes.includes(user)){
                itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})//PULL QUITA, SACA
               .then((response)=> res.json({success:true, response:response.likes}))
               .catch((error) => console.log(error))
            }else{
                itinerary.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})//PUSH AGREGA
                .then((response) => res.json({success:true, response:response.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    },
}
module.exports = itinerariesController