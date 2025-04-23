import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ExpenceList from "./expence-tracker/components/ExpenceList";

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

  const [expences, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    { id: 2, description: "Rent", amount: 1200, category: "Housing" },
    { id: 3, description: "Utilities", amount: 200, category: "Housing" },
    {
      id: 4,
      description: "Transportation",
      amount: 100,
      category: "Transport",
    },
    { id: 5, description: "Entertainment", amount: 150, category: "Leisure" },
    { id: 6, description: "Clothing", amount: 80, category: "Fashion" },
  ]);

  return (
    <div>
      <Alert>
        <p>Welcome to my shop!</p>
      </Alert>
      <ExpenceList
        expences={expences}
        onDelete={(id) => {
          setExpenses((prev) => prev.filter((expence) => expence.id !== id));
          console.log(`Deleted expence with id: ${id}`);
        }}
      ></ExpenceList>

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
