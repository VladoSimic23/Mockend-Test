interface ButtonI {
  value: string;
  clickEvent: () => void;
  btnClass?: string;
}

const Button = ({ value, clickEvent, btnClass }: ButtonI) => {
  return (
    <button className={btnClass} onClick={clickEvent}>
      {value}
    </button>
  );
};

export default Button;
