// return can only contain one element
// to add multiple elements we use fragment <> </>

import { useState, Key } from "react";

// props
interface Props {
  heading: String,
  items: String[],
  onSelection: (item: String) => void,
}

const ListGroup = ({ items, heading, onSelection }: Props) => {
  //   let items = ["pune", "nagpur", "jalna", "bhosari"];
  // items = [];

  // hooks
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // passing the ref not actually calling the function
          <li
            className={
              index === selected ? "list-group-item active" : " list-group-item"
            }
            // arrow function is passed in onClick
            onClick={() => {
              setSelected(index);
              onSelection(item);
            }}
            key={item as Key}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;


// useState flow
// onClick listner applied on all li elements
// a stateful value selected is created
// everytime user clicks on box: 
    // stateful value = index of clicked box
// re-render is triggered