import React from "react";
import PropTypes from "prop-types";
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
      <div>
        <BubbleWrapper messageType={type}>
          <BubbleDiv
            messageType={type}
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}>
            {text}
          </BubbleDiv>
        </BubbleWrapper>
        <BubbleTime messageType={type}>
          {this.state.showTime && `@` + time}
        </BubbleTime>
      </div>
    );
  }
}
Bubble.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string
};

Bubble.defaultProps = {
  text: "You're supposed to pass a text prop",
  time: "You're supposed to pass a time prop",
  type: 2
};
