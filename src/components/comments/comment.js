
import * as React from 'react';
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import itinerariesActions from '../../redux/actions/itinerariesActions';
import commentsActions from '../../redux/actions/commentsActions';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import activitiesActions from '../../redux/actions/activitiesActions';

const Comment = (props) => {
  
    
    const {id} = useParams()
    
    const [inputText, setInputText] = useState("")
    const [modify, setModify] = useState(false)
    const [reload, setReload] = useState(false)
        
  
    const cargarComentario = async () => {
      const commentData = {
        comment: inputText,
      }
      console.log(commentData)
      const cargarAwait = await props.addComment(props.itineraryId, commentData)
      console.log(cargarAwait.response.data.success)
      if(cargarAwait.response.data.success) {
        setInputText("")
        props.findOneCity(id)
        props.itinerariesPerCity(id)
        setReload(!reload)
      }
     }

        return (   
            <>
            {props.user ?
                  <div className="card cardComments">
                    <div className="card-header cardHeaderNew">
                      LEAVE US YOUR COMMENT!
                    </div>
                    <div className="card-body ">
                      <div >
                        <input id="nuevoComentario" placeholder='Ingresa aqui tu comentario...' className="card-text textComments border border-dark mb-3" value={inputText} onChange={(event) => setInputText(event.target.value)} />
                      </div>
                      <button onClick={cargarComentario} className="btn btn-primary btnComments">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
                }
            </> 
                
         
        );

    
   
    
}
 


const mapDispatchToProps = {
          findOneCity: citiesActions.findOneCity,
          getOneItinerary:itinerariesActions.getOneItinerary,
          itinerariesPerCity: itinerariesActions.itinerariesPerCity,
          addComment: commentsActions.addComment,
          modifiComment: commentsActions.modifiComment,
          deleteComment: commentsActions.deleteComment,
          likeDislike: itinerariesActions.likeDislike,
          activityPerItinerary:activitiesActions.activityPerItinerary,
          
};

const mapStateToProps = (state) => {
  return {
            city: state.Data.city,
            itineraries: state.itinerariesReducers.itineraries, 
            user: state.userReducer.user, 
            activities: state.activitiesReducers.activities,
             
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);