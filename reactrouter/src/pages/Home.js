import React, { useEffect, useState } from "react";
// import { TimePicker } from "antd";
import moment from "moment";
// import "antd/dist/antd.css";

function Home() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

//   console.log("first");
  return (
    <>
      <h1>Home</h1>
      <h4>
        Today's Date & Time : <span>{time}</span>
      </h4>
      <h4>
        Day : <span>{moment().format("dddd")}</span>
      </h4>

      <p>*Showing date & time using Moment.js library</p>
    </>
  );
}

export default Home;
