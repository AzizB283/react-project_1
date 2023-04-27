import React, {useEffect,useState,useRef} from "react";

function Ref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <h1>useRef Hook</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Render Count: {count.current}</h2>
    </>
  );
}

export default Ref;
