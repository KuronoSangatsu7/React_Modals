const UserItem = (props) => {
  return (
    <div className="flex bg-stone-300 rounded-full p-2 divide-x-4 divide-slate-700 snap-start">
      <div className="w-1/2">{props.username}</div>
      <div className="w-1/4 ml-auto pl-4">{props.age}</div>
    </div>
  );
};

export default UserItem;
