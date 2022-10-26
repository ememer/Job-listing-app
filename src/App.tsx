import React from "react";

import "./App.css";
import JobCard from "./components/JobCard";
import jobs from "./utils/data.json";

function App() {
  return (
    <div className="App">
      <header></header>
      <main className="container">
        {jobs?.map((job) => (
          <JobCard
            key={job.company}
            id={job.id}
            company={job.company}
            logo={job.logo}
            newest={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
