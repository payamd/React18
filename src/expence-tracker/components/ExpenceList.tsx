import React from "react";

interface Expence {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expences: Expence[];
  onDelete: (id: number) => void;
}

const ExpenceList = ({ expences, onDelete }: Props) => {
  return (
    <>
      <div>ExpenceList</div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expences.map((expence) => (
            <tr key={expence.id}>
              <td>{expence.description}</td>
              <td>{expence.amount}</td>
              <td>{expence.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expence.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expences.reduce((acc, expences) => expences.amount + acc, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenceList;
