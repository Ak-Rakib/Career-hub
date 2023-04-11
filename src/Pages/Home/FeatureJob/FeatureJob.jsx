import React, { useEffect, useState } from "react";
import ShowFeatureJob from "../ShowFeatureJob/ShowFeatureJob";

const FeatureJob = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs);
    useEffect(() => {
        fetch("SecondFakeData.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    },[]);
  return (
    <div>
      <div className="mt-16 text-center">
        <h1 className="font-bold text-4xl">Featured Job</h1>
        <p className="mt-2 text-gray-400 font-normal">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-5 mt-5 md:m-20">
        {
            jobs.map(job => <ShowFeatureJob
            key={job.id}
            job = {job}
            ></ShowFeatureJob>)
        }
      </div>
    </div>
  );
};

export default FeatureJob;
