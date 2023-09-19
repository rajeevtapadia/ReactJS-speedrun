// return can only contain one element
// to add multiple elements we use fragment <> </>

import { useState } from "react";

// props
interface Props {
  heading: String;
  items: String[];
}

const ListGroup = ({ items, heading }: Props) => {
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
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
