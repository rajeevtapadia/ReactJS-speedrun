// return can only contain one element
// to add multiple elements we use fragment

const ListGroup = () => {
  let items = ["pune", "nagpur", "jalna", "bhosari"];
    items = []


  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
