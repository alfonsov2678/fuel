import React from "react";
const Input = ({ name, label, error, val, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        autoFocus
        id={name}
        className="form-control"
        placeholder={val}
        aria-label={val}
        aria-describedby="basic-addon1"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
