import { useState } from "react";

function ListGroup() {
  const cities = ["New York", "Tokio", "London", "Tehran"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List:</h1>

      {cities.length === 0 ? (
        <p> The list is empty, these two are the same</p>
      ) : null}
      {cities.length === 0 && <p> The list is empty</p>}

      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
