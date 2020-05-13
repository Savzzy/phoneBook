import React, { useState, SyntheticEvent } from "react";
import "./index.scss";

type addUserProps = {
  setToggleStatus: any;
};

const AddUser: React.FC<addUserProps> = (props) => {
  const [contact, setContact] = useState<{
    name: any;
    phone_number: string;
    address: string;
  }>({
    name: "",
    phone_number: "",
    address: "",
  });

  const onFormSubmit = (event: any) => {
    var formData = new FormData(event.target);
    let formValues = [];
    for (var [key, value] of formData.entries()) {
      

    }
    event.preventDefault();
  };

  return (
    <div
      className="addUser-container"
      onClick={() => {
        props.setToggleStatus(false);
      }}
    >
      <form
        className="addUser-form"
        onClick={(event) => {
          event.stopPropagation();
        }}
        onSubmit={onFormSubmit}
      >
        <label className="name">Name </label>
        <input type="text" className="name-input" name="name" />

        <br />
        <label className="ph-no">Ph-No </label>
        <input type="text" name="phone_number" className="ph-input"></input>

        <br />
        <label className="address">Address</label>
        <input type="text" className="address-input" name="address"></input>

        <br />
        <input type="submit" className="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddUser;
