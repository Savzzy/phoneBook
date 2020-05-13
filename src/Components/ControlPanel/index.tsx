import React, { useState } from "react";
import AddUser from "../AddUser";
import Modal from "../Modal";

import addUser from "../../assests/add-user.svg";
import deleteUser from "../../assests/contact-sign-outline-with-minus-symbol.svg";

import "./index.scss";

const ControlPanel = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  return (
    <div className="icons">
      <div className="add-user-container">
        <img src={addUser} className="add-user-icon" alt="add-user-icon" onClick={()=>{setToggleStatus(true)}}/>
      </div>
      <div className="delete-user-container">
        <img
          src={deleteUser}
          className="delete-user-icon"
          alt="delete-user-icon"
        />
      </div>

      <div className="Modal-container">
        {toggleStatus && (<Modal>
          <AddUser setToggleStatus={setToggleStatus}/>
        </Modal>)} 
      </div>
    </div>
  );
};

export default ControlPanel;
