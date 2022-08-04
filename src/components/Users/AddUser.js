import TransparentContainer from "../UI/TransparentContainer";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        details: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        details: "Please enter a valid age (> 0).",
      });
      return;
    }

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

  const confirmErrorHandler = (event) => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} details={error.details} onConfirm={confirmErrorHandler} />}
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
    </div>
  );
};

export default AddUser;
