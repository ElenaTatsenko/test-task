import { Btn } from './Button.styled';

const Button = ({ text, onClick, style }) => {
  return (
    <Btn type="button" onClick={onClick} style={style}>
      {text}
    </Btn>
  );
};

export default Button;
