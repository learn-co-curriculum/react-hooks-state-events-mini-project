import React from "react";

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button className="selected">All</button>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
