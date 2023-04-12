import React, { useState, useEffect } from 'react';

const JobFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    // Fetch the job data from your API endpoint
    fetch('SecondFakeData.json')
      .then(response => response.json())
      .then(data => setJobList(data))
      .catch(error => console.log(error));
  }, []);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredJobs = selectedFilter === 'All' ? jobList : jobList.filter((job) => job.location === selectedFilter);

  return (
    <div>
      <label htmlFor="location-filter">Filter by Location:</label>
      <select id="location-filter" onChange={handleFilterChange} value={selectedFilter}>
        <option value="All">All</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>
      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <h3>{job.venue}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobFilter;
