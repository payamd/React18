import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Ottawa",
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Edmonton",
  ];

  let heading = "Cities in Canada";

  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}
export default App;
