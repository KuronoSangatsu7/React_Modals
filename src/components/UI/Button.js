const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`ml-auto bg-slate-800 p-2 px-4 rounded-full text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
