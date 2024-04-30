import loading from "./loading.gif";
import React from "react";

export default function Spinner() {
  return (
    <div className="text-center my-3 ">
      <img src={loading} alt="" width={"50px"} />
    </div>
  );
}
