import React, { Component } from "react";
import {
  ContactWrapper,
  ContactAvatar,
  SMSChatViewWrapper,
  SMSList
} from "./Style";

const Contact = ({ address, body, style, onClick }) => {
  return (
    <ContactWrapper
      style={{ ...style, borderBottom: "1px solid #f1f1f1" }}
      onClick={onClick}
    >
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

export default class SMSView extends Component {
  constructor(props) {
    super(props);
    let smses = props.smses;
    let item = Object.keys(smses).map(elem => {
      let { address, body } = smses[elem][0];
      return { address, body };
    });
    this.state = { sms: item };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item) {
    console.log(dict[item]);
  }
  rowRenderer({ key, index, style }) {
    let sms = this.state.sms[index];
    return (
      <Contact
        style={style}
        key={key}
        address={sms.address}
        body={sms.body}
        onClick={() => this.handleClick(sms.address)}
      />
    );
  }
  render() {
    return (
      <SMSChatViewWrapper>
        <SMSList
          width={400}
          height={window.innerHeight}
          rowCount={this.state.sms.length}
          rowHeight={50}
          rowRenderer={this.rowRenderer.bind(this)}
        />
        <ChatView />
      </SMSChatViewWrapper>
    );
  }
}
