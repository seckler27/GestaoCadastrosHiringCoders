import { StyledInput } from "../input/styles";

interface IProps {
  name: string;
  placeholder: string;
  value: string;
  type: string;
  
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
}

const Input = function (props: IProps) {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
     
    />
  );
};

export default Input;
