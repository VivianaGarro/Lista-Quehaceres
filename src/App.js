import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";


function App() {
  const [list, setList] = useState([]);
  console.log(list);

  return (
    <div className="App">
      <Form list={list} setList={setList} ></Form>
      <List list={list} setList={setList} ></List>
    </div>
  );
}

export default App;
