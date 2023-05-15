import React from "react";
import { useContext } from 'react';
import {name} from "../App";

function CompA() {
  const context = useContext(name);
  return <div>{context}</div>;
}

export default CompA;
