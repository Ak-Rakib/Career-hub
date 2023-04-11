import React, { useEffect, useState } from "react";
import ShowCategories from "../showCategories/showCategories";


const Category = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);
  return (
    <div>
      <div className="mt-16 text-center">
        <h1 className="font-bold text-4xl">Job Category List</h1>
        <p className="mt-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mt-5 md:m-20">
        {
            icons.map(i => <ShowCategories
            key={i.id}
            i = {i}
            ></ShowCategories>)
        }
      </div>
    </div>
  );
};

export default Category;
