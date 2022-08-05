import TransparentContainer from "../UI/TransparentContainer";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [error, setError] = useState();
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
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
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const confirmErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          details={error.details}
          onConfirm={confirmErrorHandler}
        />
      )}
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
            ref={usernameInputRef}
            className="w-full rounded-full p-2 text-black bg-stone-300"
          ></input>
          <label htmlFor="age" className="w-full">
            Age:
          </label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
            className="w-full rounded-full p-2 text-black bg-stone-300"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </TransparentContainer>
    </>
  );
};

export default AddUser;
