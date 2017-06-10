import React from "react";
import { BubbleWrapper, BubbleDiv, BubbleTime } from "./Style";

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTime: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseOver() {
    this.setState({ showTime: true });
  }
  onMouseLeave() {
    this.setState({ showTime: false });
  }
  render() {
    const { text, time, type } = this.props;
    return (
      <BubbleWrapper messageType={type}>
        <BubbleDiv
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}>
          {text}
        </BubbleDiv>
        <BubbleTime messageType={type}>
          {this.state.showTime && `@` + time}
        </BubbleTime>
      </BubbleWrapper>
    );
  }
}
