import React, { useState } from "react";

function App() {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName(preValue => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello{" " + fullname.fname + "  " + fullname.lname}</h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullname.fname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
