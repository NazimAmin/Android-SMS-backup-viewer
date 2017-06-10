import React from "react";
import { ContactWrapper, ContactAvatar } from "./Style";

const Contact = ({ address, body, style, onClick }) => {
  return (
    <ContactWrapper
      style={{ ...style, borderBottom: "1px solid #f1f1f1" }}
      onClick={onClick}>
      <ContactAvatar>
        UK
      </ContactAvatar>
      <div style={{ marginBottom: "2px" }}>
        <div style={{ fontWeight: "700" }}>
          {address}
        </div>
        <div style={{ color: "grey" }}>
          {body.length < 30 ? body : body.substr(0, 30) + ".."}
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
