import TransparentContainer from "../UI/TransparentContainer";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const user = {
      id: Math.random(),
      username: enteredUsername,
      age: enteredAge,
    };
    props.onUserAdded(user);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <TransparentContainer>
        <form
          onSubmit={addUserHandler}
          className="flex flex-wrap gap-y-3 text-white font-semibold"
        >
          <label htmlFor="username" className="w-full">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-full p-2 text-black bg-stone-300"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age" className="w-full">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="w-full rounded-full p-2 text-black bg-stone-300"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </TransparentContainer>
      <ErrorModal />
    </div>
  );
};

export default AddUser;
