import React from "react";
import { useContext } from 'react';
import {name} from "./App";

function ContextA() {
  const firstName = useContext(name);
  return (

      <>
  <div> Hello {firstName}</div>
  </>
      )

}

export default ContextA;
