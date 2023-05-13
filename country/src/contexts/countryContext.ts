import { createContext } from "react";
import { ICountry } from "../App";

export const countryContext = createContext<ICountry[]>([])