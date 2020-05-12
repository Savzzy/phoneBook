import React from "react";
import addUser from "../../assests/add-user.svg";
import deleteUser from "../../assests/contact-sign-outline-with-minus-symbol.svg";
import "./index.scss";

const ControlPanel = () => {
  return (
    <div className="icons">
      <div className="add-user-container">
        <img src={addUser} className="add-user-icon" alt="add-user-icon" />
      </div>
      <div className="delete-user-container">
        <img
          src={deleteUser}
          className="delete-user-icon"
          alt="delete-user-icon"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
