import TransparentContainer from "../UI/TransparentContainer";
import UserItem from "./UserItem";

const UsersList = (props) => {
  return (
    <TransparentContainer className="mt-5 flex flex-col gap-3 max-h-64 overflow-y-scroll scroll-py-2 snap-y">
      {props.users.map((user) => 
        <UserItem username={user.username} age={user.age} id={user.id} />
      )}
    </TransparentContainer>
  );
};

export default UsersList;
