import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const peopleList = people.map((person) => {
    return <li key={person.id}>{person.name}</li>;
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      setshowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name: name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>{peopleList}</ul>
      </div>
    </>
  );
};

export default Index;
