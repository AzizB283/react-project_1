import React, { useRef } from "react";

function UseRef() { 

  const textInput = useRef();
  const focusTextInput = () => {
    textInput.current.style.backgroundColor = "cyan";
    textInput.current.focus();

}

  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>

    </>
  );
}

export default UseRef;
