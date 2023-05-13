import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { ICountry } from "../App";


export const useAxiosFetch = (url: string) => {

  const [data, setData] = useState<ICountry[]>([])
  const [error, setError] = useState<any>("")
  const [loading, setLoading] = useState<boolean>(true)
  
  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get<any>(url)
      const filter = response.data.slice(0, 40)
      const countryContext = createContext(data)
      const filteredData: ICountry[] = filter.map((c: any, index: number): ICountry => (
        {
            id: index,
            name: c.name.official,
            region: c.region,
            population: c.population,
            area: c.area,
            flag: c.flags.png        
          }))
          setData(filteredData)
    } catch (error) {
      if(axios.isAxiosError(error)){
        setError(error.message)
      }else{
        setError(error)
      }
      setLoading(false)
    } finally{
      setLoading(false)
    }
    }
  useEffect(() => {
    fetchData()
  }, [])
  return [data, error, loading, fetchData] as const
}
