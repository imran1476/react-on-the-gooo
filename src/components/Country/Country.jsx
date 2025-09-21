import React from 'react';

const Country = ({country}) => {
    console.log(country.flags.flags.png)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags}/>
            <h4>Name:{country.name.common}</h4>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;