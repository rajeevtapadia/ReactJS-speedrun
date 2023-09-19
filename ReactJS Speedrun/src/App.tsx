import ListGroup from "./components/ListGroup";

function App() {
  let items = ["pune", "nagpur", "jalna", "bhosari"];

  return (
    <div>
      <ListGroup items={items} heading='cities'/>
    </div>
  );
}

export default App;
