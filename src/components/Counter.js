import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>INCREASE</button>
      <button onClick={decreaseCounter}>DECREASE</button>
    </>
  );
}

export default Counter;
