import { React, useState } from "react";

function TwoWayBinder() {
  const [value, setValue] = useState();

  const changesHandler = function (e) {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1></h1>
      <input value="" type="text" onChange={changesHandler} />
    </div>
  );
}

export default TwoWayBinder;
