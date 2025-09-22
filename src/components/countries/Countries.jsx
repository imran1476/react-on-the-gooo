import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries , setVisitedCountries]= useState([]);
    const handleVisitedCountries=(country)=>{
        console.log("visited countires clicked",country);
       const newVisitedCountries=[...visitedCountries,country];
         setVisitedCountries(newVisitedCountries);
    }
    const [visitedFlags , setVisitedFlags]=useState([]);
    const handleVisitedFlags=(flags)=>{
        // console.log("flags");
        const newVisitedFlags=[...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
// console.log(countries )
    return (
         <div>
            <h2>In the Country:{countries.length}</h2> 
            <h4>Visited Countries:{visitedCountries.length}</h4> 
<h3>Visited Flags:{visitedFlags.length}</h3>
            <ol>
               { visitedCountries.map((country)=><li>
{country.name.common}
                </li>

                )}
            </ol>
            <div className='visited-flag'>
               { visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)}
            </div>
        <div className='countries'>
          
           {
            countries.map(country=> <Country 
            country={country}
             handleVisitedCountries={handleVisitedCountries} 
             handleVisitedFlags={handleVisitedFlags}
             >
                  
            </Country> )
           }
        </div>
         </div>
    );
};

export default Countries;