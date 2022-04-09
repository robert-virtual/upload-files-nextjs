import { useState } from "react";

export default function Hello() {
  const [things, setThings] = useState([]);
  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        onKeyUp={({ key, target }) => {
          if (key == "Enter") {
            setThings([...things, target.value]);
            console.log(key);
          }
        }}
      />
      {things.map((e, i) => (
        <div key={i.toString()}>
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
}
