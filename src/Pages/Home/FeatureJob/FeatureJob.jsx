import React, { useEffect, useState } from "react";
import ShowFeatureJob from "../ShowFeatureJob/ShowFeatureJob";
import { Link } from "react-router-dom";
import { addToDb } from "../../../Utilities/fakeDb";

const FeatureJob = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("SecondFakeData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleJobClick = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <div className="mt-16 text-center">
        <h1 className="font-bold text-4xl">Featured Job</h1>
        <p className="mt-2 text-gray-400 font-normal">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5 mt-10 md:ps-30">
          {showAll
            ? jobs.map((job) => (
                <ShowFeatureJob
                  key={job.id}
                  job={job}
                  handleJobClick={handleJobClick}
                />
              ))
            : jobs
                .slice(0, 6)
                ?.map((job) => (
                  <ShowFeatureJob
                    key={job.id}
                    job={job}
                    handleJobClick={handleJobClick}
                  />
                ))}
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Link
          onClick={handleShowAll}
          className="btn border-0 bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeatureJob;
