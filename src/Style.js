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
export const SMSChatViewWrapper = styled.div`
  background-color: #fff;
  display: flex;
  font-size: 14px;
  min-width: 500px;
  outline:none !important;
  `;
export const ContactWrapper = styled.div`
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 25px;
  &:hover {
			background: #f1f1f1;
		};
  `;
export const ContactAvatar = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 40px;
  display: block;
  background-color: palevioletred;
  color: #fff;
  font-size: 1.5em;
  margin-right: 25px;
  `;
export const SMSList = styled(List)`

    max-width: : 420px;
    outline:none !important;
    border-bottom: 1px solid #e6d8d8;
    cursor: pointer;
    @media (max-width: 700px){
    flex-basis: 35%;
    min-width: 74px;
    }
    `;
export const ChatViewWrapper = styled.div`
      display: flex;
      flex: 3;
      flex-direction: column;
      min-width: 500px;
      border-left: 1px solid rgba(0, 0, 0, .20);
      background-color: #fff;
      @media (max-width: 920px){
        flex: 1 1 0%;
      }
      `;
export const BubbleWrapper = styled.div`
  display: flex;
  justify-content: ${props =>
    props.messageType === "2" ? "flex-end" : "flex-start"};
`;
export const BubbleDiv = styled.div`
        background-color: rgb(7, 191, 234);
        color: white;
        padding: 6px;
        margin: 2px 6px 0 0;
        border-radius: 6px;
        display: inline-flex;
        max-width: 50%;
      `;
export const BubbleTime = styled.div`
        display: flex;
        margin: 0 10px 0 10px;
        padding: 0 0 0 4px;
        color: ${props => (props.messageType === "2" ? "green" : "red")};
      `;
