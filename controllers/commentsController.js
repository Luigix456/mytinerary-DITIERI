const Itineraries = require('../models/itineraries')

const commentsControllers = {

    addComment: async (req, res) => {
        try {
            const nuevoComment = await Itineraries.findOneAndUpdate(
            {_id: req.params.id},
            {$push:
                 {comments:
                     { comment: req.body.comment,
                       userID: req.user._id
                     }
                 }
            }, 
            {new: true}
        ).populate("comments.userID","name")
            res.json({ success: true, response: nuevoComment, message:"gracias por dejarnos tu comentario"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    
    modifyComment: async (req, res) =>{
        const { comment} = req.body
        try{
            const modifyComment = await Itineraries.findOneAndUpdate(
                {"comments._id":req.params.id},
                {$set:{"comments.$.comment":comment}},
                {new:true}
               
            )
            if (modifyComment) {
                res.json({success: true,
                response: modifyComment})
            }else{
                res.json ({error:"el comentario no se ha encontrado"})
            }
        }catch (error){
            res.json ({success: false,
            response: error.message})
        }
        
    },
    
    deleteComment: async (req, res) => {
        try {
            const deleteComment = await Itineraries.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $pull: {
                        comments: {
                            _id: req.params.comment
                        }
                    }
                },
                {new: true})
          console.log(deleteComment)
            res.json({ success: true, response: deleteComment, message: "has eliminado el comentario" })

        }catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo ha salido mal intentalo en unos minutos" })
        }

    },
    
}
module.exports = commentsControllers