import React, {useEffect, useState } from 'react'
import "./App.css"
import Country from './components/Country';
import Header from './components/Header';
import Filter from './components/Filter';
import { useAxiosFetch } from './hooks/useAxios';
import { countryContext } from './contexts/countryContext';

 export interface ICountry{
  name: string
  region: string
  population: number
  area: number
  flag: string
  id: number
}
const App = (): JSX.Element => {
  const [data, error, loading] = useAxiosFetch("https://restcountries.com/v3.1/all")
  const [country, setCountry] = useState<ICountry[]>([])  
  
  const handleDelete = (event: React.MouseEvent<HTMLDivElement>): any => {
      const temp: ICountry[] = country.filter((elem: ICountry, index: number) => index !== +event.currentTarget.id)
      setCountry(temp)
    }
    
    const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const temp = event.currentTarget.value
    const updatedCountry = data.filter((elem: ICountry) => elem.name.toLowerCase().startsWith(temp))
    setCountry(updatedCountry)
  }

  const handleSort = (event: React.MouseEvent<HTMLOptionElement>) => {
    const temp = event.currentTarget.value
      const filteredCountry = country.filter((elem: ICountry) => elem.region === temp)
      setCountry(filteredCountry)
  }

  const areaFilter = (event: React.MouseEvent<HTMLOptionElement>) => {
    const temp = event.currentTarget.value
    switch (temp) {
      case "Area":
        const sortedArea = [...country].sort((a: ICountry, b: ICountry) => b.area - a.area)
        setCountry(sortedArea)
        break;
      case "Population":
        const sortedPopulation = [...country].sort((a: ICountry, b: ICountry) => b.population - a.population)
        setCountry(sortedPopulation)
        break;
        default:
    }
  }

  useEffect(() => {
      setCountry(data)
    }, [data])

  return (
      <countryContext.Provider value={country}>
          <Filter handleSearch = {handleSearch} handleSort = {handleSort} areaFilter = {areaFilter}/>
          <Header/>
          <Country handleDelete = {handleDelete}/>
        {loading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}
      </countryContext.Provider>
    
  )
}

export default App