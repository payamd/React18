import React from "react";
import { categories } from "../App";

const ExpenceForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Discription
        </label>
        <input id="discription" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="" id="category" className="form-select">
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenceForm;
