import React from 'react'

const Card=({name , email ,id}) => {
    
    return(
       
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 qw fl w-23">
            <img className="photo" alt='robot' src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name} </h2>
                <p> {email}</p>
            </div>
        </div>

    );
}

export default Card;