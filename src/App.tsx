import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "Tokio", "London", "Tehran"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}
export default App;
