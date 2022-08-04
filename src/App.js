import { useState } from "react";
import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const userAddedHandler = (user) => {
    setUsersList((prevState) => [user, ...prevState]);
  };

  return (
    <FullWrapper>
      <AppWrapper>
        <AddUser onUserAdded={userAddedHandler} />
        <UsersList users={usersList} />
      </AppWrapper>
    </FullWrapper>
  );
};

export default App;
