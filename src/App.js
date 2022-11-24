import React, { useState } from "react";
import User from "./User";

const App = () => {
  const [details, setDetails] = useState();

  console.log(details);

  const dataFetchChild = (data) => {
    setDetails(data.data);
  };

  return (
    <>
      <h2>Data Lifting from child to parent</h2>
      <User sendChildData={dataFetchChild} />
      <div>
        {details &&
          details.map((detail) => {
            return (
              <>
                <div key={detail.id}>
                  <img src={detail.image} alt="images" />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default App;
