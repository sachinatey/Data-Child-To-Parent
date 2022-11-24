import React, { useState } from "react";
import axios from "axios";

const User = (props) => {
  const [storeApi, setStoreApi] = useState();

  axios.get("https://fakestoreapi.com/products").then((res) => {
    setStoreApi(res);
  });

  return (
    <>
      <button
        onClick={() => {
          props.sendChildData(storeApi);
        }}
      >
        Click
      </button>
    </>
  );
};

export default User;
