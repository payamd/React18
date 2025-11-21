import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ExpenceList from "./expence-tracker/components/ExpenceList";
import ExpenceFilter from "./expence-tracker/components/ExpenceFilter";
import ExpenceForm from "./expence-tracker/ExpenceForm";

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Groceries" },
    {
      id: 2,
      description: "Entertainmnet",
      amount: 1200,
      category: "Entertainment",
    },
    { id: 3, description: "Utilities", amount: 200, category: "Utilities" },
    {
      id: 4,
      description: "Transportation",
      amount: 100,
      category: "Transport",
    },
    {
      id: 5,
      description: "Entertainment",
      amount: 150,
      category: "Entertainment",
    },
    { id: 6, description: "Groceries", amount: 80, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <Alert>
        <p>Welcome to my shop!</p>
      </Alert>

      <div className="mb-5">
        <ExpenceForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenceForm>
      </div>

      <br></br>
      <hr></hr>
      <div className="mb-3">
        <ExpenceFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        ></ExpenceFilter>
      </div>

      <ExpenceList
        expences={visibleExpenses}
        onDelete={(id) => {
          setExpenses((prev) => prev.filter((expense) => expense.id !== id));
          console.log(`Deleted expense with id: ${id}`);
        }}
      ></ExpenceList>

      <br />
      <hr />

      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button type="danger" text="Button"></Button>
    </div>
  );
}
export default App;
