import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["pune", "nagpur", "jalna", "bhosari"];

  const handleSelectedItem = (item: String) => {
    console.log(item);
  };
  const doNothing = () => {};

  return (
    <div>
      <Alert>
        {/* this content is recieved to parent as prop named children */}
        <h1>Hello world</h1>
        <div>lolfuck</div>
      </Alert>
      <ListGroup items={items} heading='cities' onSelection={handleSelectedItem}/>
      <ListGroup heading='second list' items={['i', 'am', 'god']} onSelection={doNothing}/>
    </div>
  );
}

export default App;
