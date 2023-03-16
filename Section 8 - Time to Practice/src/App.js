import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import Card from "./components/UI/Card/Card";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const dummyData = [{ username: "Farzeen Zainab", age: "22" }];
  const [listData, setListData] = useState(dummyData);

  const addNewUser = function (userData) {
    setListData((prevList) => {
      return [userData, ...prevList]; //always return the value if the state depends on the previous state
    });
  };

  const content = <UserList users={listData} />;
  return (
    <div>
      <Card className={"add-user-container"}>
        <AddUser newUser={addNewUser} />
      </Card>
      <Card className={"user-list"}>{content}</Card>
    </div>
  );
}

export default App;
