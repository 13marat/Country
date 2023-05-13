import React, { useContext } from 'react'
import { ICountry } from '../App'
import Name from './Name'
import Region from './Region'
import Population from './Population'
import Area from './Area'
import Flag from './Flag'
import { countryContext } from '../contexts/countryContext';


const Country = ({handleDelete}: any): JSX.Element => {
    const country = useContext(countryContext)

  return (
    <div>
        {
            country.map((elem: ICountry, index: number): React.ReactNode => {
                return(
                    <div key={index}>
                        <div style={{display: "grid", gridTemplateColumns: "3fr 1fr 2fr 1fr 1fr 40px", padding: "20px"}}>
                            <Name name = {elem.name}/>
                            <Region region = {elem.region}/>
                            <Population population = {elem.population}/>
                            <Area area = {elem.area}/>
                            <Flag flag = {elem.flag}/>
                            <div id = {index.toString()} onClick={handleDelete} style={{fontSize: "28px", color: "red", cursor: "pointer"}}>X</div>
                        </div>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Country