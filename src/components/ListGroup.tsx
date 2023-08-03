import { MouseEvent } from "react";

function ListGroup() {
  const cities = ["New York", "Tokio", "London", "Tehran"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List:</h1>

      {cities.length === 0 ? (
        <p> The list is empty, these two are the same</p>
      ) : null}
      {cities.length === 0 && <p> The list is empty</p>}

      <ul className="list-group">
        {cities.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
