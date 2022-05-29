import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Spread operator below '...' will pass all of the object properties in the related 'input' object */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
