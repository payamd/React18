import { useState } from "react";

function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List:</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => console.log(item, setSelectedIndex(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
