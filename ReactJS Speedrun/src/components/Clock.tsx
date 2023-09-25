import React, { useState } from "react";

// interface Prop{
//     time: String
// }

const Clock = () => {
//   let now = new Date().getTime()

  const [now, getTime] = useState(new Date().toLocaleTimeString())

  setInterval(() => getTime(new Date().toLocaleTimeString()), 1000)
  return (<>
    {now}
  </>);
};

export default Clock;
