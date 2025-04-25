import React from "react";
import categories from "./categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenceFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <p className="mb-3">Select proper category to filter the expences:</p>
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenceFilter;
