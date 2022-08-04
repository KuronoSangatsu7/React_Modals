const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`ml-auto bg-purple-700 p-2 rounded-full text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
