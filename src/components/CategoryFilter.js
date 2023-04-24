import React from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, onSelectCategory } = props;

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button className = {selectedCategory === "All" ? "selected" : ""} onClick={() => handleCategoryClick("All")}>All</button>
      {categories.map((category) => (
        <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => handleCategoryClick((category))}>{category}</button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
