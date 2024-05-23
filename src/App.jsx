import "./App.css";
import Form from "./components/Form";
import Task from "./components/Item";
import Item from "./components/Item";
import List from "./components/List";

function App() {
  return (
    <>
      <List />
      <Form />
      <Item/>
      <Task/>
    </>
  );
}

export default App;
