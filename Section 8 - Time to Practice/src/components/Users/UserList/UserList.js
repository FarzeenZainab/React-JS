import React from "react";

const UserList = ({ users }) => {
  const userList = users.map((user) => {
    return (
      // always return the value in map, filter, reduce
      <li className="user" key={Math.random().toString()}>
        {user.username} {user.age}
      </li>
    );
  });

  return <ul>{userList}</ul>;
};

export default UserList;
