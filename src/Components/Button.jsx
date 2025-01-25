const Button = ({ onButtonClicked }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName} // Corrected the key prop
          className="p-4 m-4 text-white w-14 h-14 bg-zinc-800"
          onClick={() => onButtonClicked(buttonName)} // Corrected the event handler to onClick
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Button;
