import React from 'react'


const Filter = ({handleSearch, handleSort, areaFilter}: any) => {


  return (
    <div style={{display: "flex", justifyContent: "space-between", marginBlock: "20px"}}>
        <div>
            <input type="text" placeholder="Search" onChange = {handleSearch}/>
            <select onChange={handleSort} name="region">
                <option value="Region">Region</option>
                <option value="Asia">Asia</option>
                <option value="Americas">Americas</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div>
            <select name="sort" onChange={areaFilter}>
                <option value="Sort by population">Sort by population</option>
                <option value="Area">Area</option>
                <option value="Population">Population</option>   
            </select>
        </div>
    </div>
  )
}

export default Filter