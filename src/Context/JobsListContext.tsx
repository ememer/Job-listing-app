import React, { createContext } from "react"

import { ContextType } from "../@types/JobListTypes"


export const JobListContext = createContext<ContextType | []>([])