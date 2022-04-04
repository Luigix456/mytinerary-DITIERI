import * as React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const Likes = (props) => {
    
    
    console.log(props.itineraries.id)
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const {id} = useParams()
    const [reload, setReload] = useState(false)
    const [likes, setLikes] = useState(props.itineraries.likes)

    useEffect(() => {
        
      props.getOneItinerary(props.id)
      .then( response => setLikes(response.data.response.likes))
      }, [!reload]);
      
    async function likesOrDislikes() {
        await props.likeDislike(props.itineraries._id)
        setReload(!reload)
    }    




return (
    <CardActions disableSpacing>


        <div className="likeDislike d-flex">

                    {props.user ?
                    (<button onClick={likesOrDislikes}>{likes.includes(props.user.id) ?
                        <span style={{ color: "red", fontSize:30 }} className="material-icons">favorite</span> :
                        <span style={{  fontSize:30 }}className="material-icons">favorite_border</span>}</button>)

                    : (<span style={{  fontSize:30 }} className="material-icons">favorite_border</span>)}

                    {<h3 style={{  color:"black ",fontSize:30 }}>{likes.length}</h3>}
        </div>
      
    </CardActions>
)
}

const mapDispatchToProps = {
          getOneItinerary:itinerariesActions.getOneItinerary,
          likeDislike: itinerariesActions.likeDislike,
          
};

const mapStateToProps = (state) => {
  return {
            itineraries: state.itinerariesReducer.itineraries, 
            user: state.userReducer.user, 
             
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
