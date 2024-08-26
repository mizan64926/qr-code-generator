import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [errMsg, setErrMsg] = useState("");
  const validateCard = (value) => {
    setErrMsg("");
    if (validator.isCreditCard(value)) {
      setErrMsg("number is valid");
    } else {
      setErrMsg("number is wrong");
    }
  };

  return (
    <div>
      <input type="text" placeholder="enter your credit card number" onChange={(e) => validateCard(e.target.value)} />
      <p>{errMsg}</p>
    </div>
  );
};

export default App;
