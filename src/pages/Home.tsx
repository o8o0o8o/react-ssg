import React, { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <br />
      <div>Button clicked {counter} times</div>
      <br />
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Click me!
      </button>
      <p>some text</p>
    </div>
  );
}
