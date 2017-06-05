import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import "./App.css";
import {
  UploadButton,
  ContactWrapper,
  ContactAvatar,
  ChatViewWrapper,
  SMSChatViewWrapper,
  SMSList
} from "./Style";

let dict = {};
// returns a dictionary of the xml
const parseXMLtoDict = xml => {
  let smses = xml.getElementsByTagName("sms");
  for (let sms of smses) {
    const address = sms.attributes.getNamedItem("address").value;
    const subject = sms.attributes.getNamedItem("subject").value;
    const body = sms.attributes.getNamedItem("body").value;
    const date = sms.attributes.getNamedItem("readable_date").value;
    const sortDate = sms.attributes.getNamedItem("date").value;
    const type = sms.attributes.getNamedItem("type").value; //type 1 recieved, type 2 sent
    let reciepient = dict[address] || [];
    reciepient.push({
      address,
      subject,
      body,
      date,
      sortDate,
      type
    });
    dict[address] = reciepient;
  }
  return dict;
};

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false,
      smses: []
    };
  }
  sanitizeXML(e) {
    let doc = new DOMParser().parseFromString(e.target.result, "text/xml");
    const result = parseXMLtoDict(doc);
    this.setState({ smses: result, uploaded: true });
  }
  handleFiles = files => {
    let reader = new FileReader();
    reader.readAsText(files[0]);
    //reader.onprogress TODO
    reader.onload = this.sanitizeXML.bind(this);
  };
  render() {
    if (!this.state.uploaded) {
      return (
        <div className="App">
          <div className="App-header">
            <p className="App-intro">
              To get started, upload an XML file in
              <code>
                {`
                <smses>
                  <sms
                    address="3214348976"
                    date="315967535846"
                    type="2"
                    subject="null"
                    body="Your message string"
                    readable_date="Jan 6, 1980 6:45:35 AM"
                  />
                  ...
                </smses>
              `}
              </code>
              format.
            </p>
            <ReactFileReader
              fileTypes="text/xml"
              handleFiles={this.handleFiles}
            >
              <UploadButton primary>Upload XML file</UploadButton>
            </ReactFileReader>
          </div>
        </div>
      );
    } else {
      return <SMSView smses={this.state.smses} />;
    }
  }
}
const Contact = ({ address, body, style, onClick }) => {
  return (
    <ContactWrapper
      style={{ ...style, borderBottom: "1px solid #f1f1f1" }}
      onClick={() => onClick && onClick()}
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
class ChatView extends Component {
  render() {
    return (
      <ChatViewWrapper>
        <h2 className="App" style={{ justifyContent: "center" }}>
          Select a contact from the list
        </h2>
      </ChatViewWrapper>
    );
  }
}
class SMSView extends Component {
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

class App extends Component {
  render() {
    return <MainView />;
  }
}
export default App;
