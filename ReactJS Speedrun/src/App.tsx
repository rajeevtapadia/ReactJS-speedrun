import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Clock from "./components/Clock";
import { createElement, useState } from "react";

function App() {
  let items = ["pune", "nagpur", "jalna", "bhosari"];

  const handleSelectedItem = (item: String) => {
    console.log(item);
  };
  const doNothing = () => {};

  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <Alert onClose={() => {}}>
        {/* this content is recieved to parent as prop named children */}
        <h1>Hello world</h1>
        <div>lolfuck</div>
      </Alert>
      {/* <ListGroup items={items} heading='cities' onSelection={handleSelectedItem}/>
      <ListGroup heading='second list' items={['i', 'am', 'god']} onSelection={doNothing}/> */}
      {visibility && (
        <Alert
          onClose={() => {
            setVisibility(false);
          }}
        >
          new alert
        </Alert>
      )}
      <Button
        text="press and see if something happens"
        addOnClick={() => {
          setVisibility(true);
        }}
        color="danger"
      />

      <Clock/>
    </div>
  );
}

export default App;
