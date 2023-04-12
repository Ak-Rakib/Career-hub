import React, { useEffect, useState } from "react";
import ShowFeatureJob from "../ShowFeatureJob/ShowFeatureJob";
import { Link } from "react-router-dom";

const FeatureJob = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  console.log(jobs);
  useEffect(() => {
    fetch("SecondFakeData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div>
      
      {/* Title part */}
      <div className="mt-16 text-center">
        <h1 className="font-bold text-4xl">Featured Job</h1>
        <p className="mt-2 text-gray-400 font-normal">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      {/* Process of showing Data  */}
      <div className="grid md:grid-cols-2 gap-5 mb-5 mt-5 md:m-20">
        {showAll
          ? jobs.map((job) => (
              <ShowFeatureJob key={job.id} job={job}></ShowFeatureJob>
            ))
          : jobs
              .slice(0, 4)
              .map((job) => (
                <ShowFeatureJob key={job.id} job={job}></ShowFeatureJob>
              ))}
      </div>

      {/* Button section */}
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
