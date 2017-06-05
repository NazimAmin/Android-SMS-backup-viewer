import List from "react-virtualized/dist/commonjs/List";
import styled from "styled-components";

export const UploadButton = styled.button`
  padding: 2% !important;
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;

export const ContactWrapper = styled.div`
  height: 50px;
  top: 0px;
  width: '100%';
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 25px;
  background-color: #fff;
  border-bottom: 1px solid #e6d8d8;
  `;
export const ContactAvatar = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 40px;
  background-color: palevioletred;
  color: #fff;
  font-size: 1.5em;
  margin-right: 25px;
  `;
export const ChatViewWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  min-width: 0;
  border-left: 1px solid rgba(0, 0, 0, .20);
  background-color: #fff;
  `;
export const SMSChatViewWrapper = styled.div`
    background-color: #fff;
    display: flex;
    font-size: 14px;
    min-width: 500px;
    `;
export const SMSList = styled(List)`
    flex: 0 0 25%;
    max-width: : 420px;
    min-width: : 240px;
    border-right: black;
    `;
