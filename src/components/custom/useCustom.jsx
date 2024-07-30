import React, { useEffect, useState } from "react";

export default function useCustom(defaultValue) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    setValue("updated");
  }, []);
  return <div></div>;
}
