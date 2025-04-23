import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenceFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All</option>
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Housing">Housing</option>
      <option value="Leisure">Leisure</option>
      <option value="Fashion">Fashion</option>
      <option value="Other">Other</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenceFilter;
