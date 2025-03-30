import Alert from "./components/Alert";
import Button from "./components/Button";
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
      <Alert>
        <p>silam silam silam</p>
      </Alert>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button type="danger" text="silam silam"></Button>
    </div>
  );
}
export default App;
