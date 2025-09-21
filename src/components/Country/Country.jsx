import React, { useState } from 'react';
import './country.css'

const Country = ({country , handleVisitedCountries}) => {
 
    const [visited ,setVisited]= useState(false)
    //    console.log( handleVisitedCountries)
    // console.log(country.area.area)
    const handleVisit=()=>{
        // setVisited(true)
        // console.log('clicked')
        // first
        // if(visited){
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }

        // second

        // setVisited(visited ? false :true)
        // third
        setVisited(!visited);
        handleVisitedCountries(country);      
    }
    return (
        <div className={`country  ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags}/>
            <h4>Name:{country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : " Small Country"}</p>
            <button onClick={handleVisit}>{visited ? "visited" :"Not Visited"}</button>
        </div>
    );
};

export default Country;