import React from 'react';

const DetailsItinerary = ({itinerary}) => {
    
        console.log(itinerary)
        return (
          <>
          <div className="container div-itinerary">
              <div className="img-title-itinerary">
                <h1>{itinerary.name}</h1>
                <img className='img-itinerary' src={itinerary.image} alt="rover" />
              </div>
            <div className="card card-itinerary">
              <p className="description-itinerary">{itinerary.description}</p>
              <div className="cont-img-info"></div>
              <div className="img-p-itinerary">
                <img className="userImg" src={itinerary.imageUser}></img>
                <p>{itinerary.userName}</p>
              </div>
              <div>
                <p>{itinerary.hashtags}</p>
                <p>Price: {"💸".repeat(parseInt(itinerary.price))}</p>
                <p>{itinerary.hashtags}</p>
                <p>Duration: {itinerary.hours} Hours</p>
                <p>Likes: {itinerary.likes}</p>
              </div>
              <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  View More
                </a>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <img src="https://ps.w.org/easy-under-construction/assets/banner-772x250.png?rev=2417171"></img>
                </div>
              </div>
            </div>
          </div>
          </>
        );
}
 
export default DetailsItinerary;
