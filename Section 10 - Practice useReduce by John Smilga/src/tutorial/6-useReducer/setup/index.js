import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
const reducer = function (state, action) {
  switch (action.type) {
    case "NAME_USER_INPUT":
      return {
        ...state,
        personName: action.value,
        showModal: false,
        modalMsg: "",
      };

    case "INVALID_INPUT":
      return {
        ...state,
        showModal: true,
        modalMsg: "Please add a name",
      };

    case "ADD_NEW_NAME":
      const newData = {
        id: new Date().getTime().toString(),
        name: state.personName,
      };

      return {
        ...state,
        people: [...state.people, newData],
        personName: "",
        showModal: true,
        modalMsg: "Item Added",
      };

    case "REMOVE_ITEM":
      // remove an item from an array
      // filter method
      const filteredList = state.people.filter((person) => {
        return person.id !== action.payload;
      });

      return {
        ...state,
        people: filteredList,
        showModal: true,
        modalMsg: "Item Removed",
      };

    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
        modalMsg: "",
      };
  }
};

const Index = () => {
  const initialState = {
    id: "",
    personName: "",
    showModal: false,
    modalMsg: "",
    people: data,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (event) => {
    dispatch({ type: "NAME_USER_INPUT", value: event.target.value });
  };

  const closeModal = function () {
    dispatch({ type: "HIDE_MODAL" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.personName.length > 0) {
      const newData = {
        id: new Date().getTime().toString(),
        name: state.personName,
      };
      dispatch({ type: "ADD_NEW_NAME", payload: newData });
    } else {
      dispatch({ type: "INVALID_INPUT" });
    }
  };

  const removeItem = function (personId) {
    console.log(personId);
    dispatch({ type: "REMOVE_ITEM", payload: personId });
  };

  const peopleList =
    state.people.length > 0 ? (
      state.people.map((person) => {
        return (
          <>
            <div className="item">
              <li key={person.id} id={person.id}>
                {person.name}
              </li>
              <button onClick={removeItem.bind(null, person.id)}>remove</button>
            </div>
          </>
        );
      })
    ) : (
      <p>Please enter new names</p>
    );

  return (
    <>
      {state.showModal && <Modal closeModal={closeModal}>{state.modalMsg}</Modal>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={state.personName} onChange={handleNameChange} />
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
