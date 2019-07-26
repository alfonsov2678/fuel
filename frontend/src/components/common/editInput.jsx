import React from "react";
const Edit = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        placeholder={name}
        className="form-control"
        aria-label={name}
        aria-describedby="basic-addon1"
        autoFocus
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Edit;
