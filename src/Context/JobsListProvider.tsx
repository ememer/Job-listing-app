import React from "react";

import { JobListContext } from "./JobsListContext";
import data from "./../utils/data.json";

interface Props {
  children: React.ReactNode;
}

const JobListProvider = ({ children }: Props) => {
  return (
    <JobListContext.Provider value={data}>{children}</JobListContext.Provider>
  );
};

export default JobListProvider;