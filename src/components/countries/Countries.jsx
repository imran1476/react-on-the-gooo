import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries , setVisitedCountries]= useState([]);
    const handleVisitedCountries=(country)=>{
        console.log("visited countires clicked",country)
    }
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
// console.log(countries )
    return (
         <div>
            <h2>In the Country:{countries.length}</h2> 
            <h4>Visited Countries:</h4>
        <div className='countries'>
          
           {
            countries.map(country=> <Country 
            country={country}
             handleVisitedCountries={handleVisitedCountries}>
 
            </Country> )
           }
        </div>
         </div>
    );
};

export default Countries;