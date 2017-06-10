import React from "react";
import Contact from "./ContactView";
import ChatView from "./ChatView";
import { SMSChatViewWrapper, SMSList } from "./Style";

export default class SMSView extends React.Component {
  constructor(props) {
    super(props);
    this.smses = props.smses;
    let item = Object.keys(this.smses).map(elem => {
      let { address, body } = this.smses[elem][0];
      return { address, body };
    });
    this.state = { sms: item, display: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item) {
    this.setState({ display: this.smses[item] });
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
        <ChatView sms={this.state.display} />
      </SMSChatViewWrapper>
    );
  }
}
