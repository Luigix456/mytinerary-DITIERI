import * as React from 'react';


const ActivityItem = ({activity}) => {
    console.log(activity)
    return ( 
<>

<div className="card cardactivity me-3 mb-5">
  <img className="imgcard img-fluid mt-3 mb-3" src={process.env.PUBLIC_URL+ `/imagenes/${activity.image}`} alt="img ciudad" />
  <div className="card-body">
  <h5 className="card-title">{activity.name}</h5>
    <p className="card-text">{activity.description}</p>
  </div>
</div>

</>    
     );
}
 
export default ActivityItem;