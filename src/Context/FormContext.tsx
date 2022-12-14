import { createContext } from "react"
import { FormContextProvider } from "../@types/FormContext"

export const FormContext = createContext<object | null | FormContextProvider>(null)