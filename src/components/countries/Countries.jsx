import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
console.log(countries )
    return (
        <div>
           <h2>In the Country:{countries.length}</h2> 
           {
            countries.map(country=> <Country country={country}>

            </Country> )
           }
        </div>
    );
};

export default Countries;