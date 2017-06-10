import React from "react";
import Bubble from "./Bubble";
import { ChatViewWrapper } from "./Style";
export default class ChatView extends React.Component {
  _renderChat(sms) {
    const bubble = sms.map((elem, index) =>
      <Bubble key={index} text={elem.body} time={elem.date} type={elem.type} />
    );
    return bubble;
  }
  render() {
    const { sms } = this.props;
    return (
      <ChatViewWrapper>
        {sms.length < 1 &&
          <h2 className="App" style={{ justifyContent: "center" }}>
            Select a contact from the list
          </h2>}
        {sms.length > 0 && this._renderChat(sms)}
      </ChatViewWrapper>
    );
  }
}
