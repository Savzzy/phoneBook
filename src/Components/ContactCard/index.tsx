import React from "react";

import "./index.scss";

type myProps = {
  personalDetails: { address: string; name: string; phone_number: string };
};

const ContactCard: React.FC<myProps> = (props) => {
  return (
    <div className="contact-card">
      <div className="person">{props.personalDetails.name}</div>
      <div className="ph-number">{props.personalDetails.phone_number}</div>
      <div className="address">{props.personalDetails.address}</div>
    </div>
  );
};

export default ContactCard;
