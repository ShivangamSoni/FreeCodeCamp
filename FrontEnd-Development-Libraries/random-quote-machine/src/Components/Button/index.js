const Button = ({ children, type, ...props }) => {
  if (type === "a") {
    return (
      <a {...props} className="btn">
        {children}
      </a>
    );
  } else {
    return (
      <button {...props} className="btn">
        {children}
      </button>
    );
  }
};

export default Button;
