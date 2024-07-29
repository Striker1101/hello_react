import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  //life cycle event of a component
  const [time, setTime] = useState(new Date().toLocaleDateString());
  /**
   * start
   * update
   * end
   */

  //start
  useEffect(() => {
    console.log("component has been mounted");
  }, []);

  //updated
  useEffect(() => {
    console.log("time has been updated");
  }, [time]);

  //kill or end
  useEffect(() => {
    return () => {
      console.log("component has unmounted");
    };
  }, []);

  setInterval(() => {
    setTime(new Date().toLocaleDateString());
  }, 1000);

  return <div>{time}</div>;
}
