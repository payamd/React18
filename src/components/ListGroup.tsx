function ListGroup() {
  let items = [
    { id: 1, name: "An item" },
    { id: 2, name: "A second item" },
    { id: 3, name: "A third item" },
    { id: 4, name: "A fourth item" },
    { id: 5, name: "And a fifth one" },
  ];

  return (
    <>
      <h1>List:</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item"
            onClick={() => console.log(item.name, item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
