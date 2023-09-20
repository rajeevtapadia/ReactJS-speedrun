import { useState } from "react";

interface Prop {
  text: String;
  color?: 'primary' | 'secondary' | 'danger';
  addOnClick: () => void;
}

const Button = ({ text, addOnClick, color = 'primary' }: Prop) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={addOnClick}>
      {text}
    </button>
  );
};

export default Button;
