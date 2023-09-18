// return can only contain one element
// to add multiple elements we use fragment <> </>

import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["pune", "nagpur", "jalna", "bhosari"];
  // items = [];

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
            // passing the ref not actually calling the function 
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
