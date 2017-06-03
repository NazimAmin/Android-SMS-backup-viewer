import React, { Component } from "react";
import ReactListView from "react-list-view";
import ReactFileReader from "react-file-reader";
import styled from "styled-components";
import "./App.css";

// returns a dictionary of the xml
const parseXMLtoDict = xml => {
  let dict = {};
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
    this.setState({ smses: result, uploaded: true }, () => {
      console.log(this.state.smses);
    });
  }
  handleFiles = files => {
    var fileresult;
    let reader = new FileReader();
    reader.readAsText(files[0]);
    //reader.onprogress TODO
    reader.onload = this.sanitizeXML.bind(this);
  };
  render() {
    const UploadButton = styled.button`
      padding: 2% !important;
      background: ${props => (props.primary ? "palevioletred" : "white")};
    	color: ${props => (props.primary ? "white" : "palevioletred")};
    	font-size: 1em;
    	margin: 1em;
    	padding: 0.25em 1em;
    	border: 2px solid palevioletred;
    	border-radius: 3px;
      `;

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
      return <SMSView />;
    }
  }
}

class SMSView extends Component {
  constructor(props) {
    super(props);
  }
  _renderItem(x, y) {
    return <div style={{ height: "100%" }}>Item #{x},#{y}</div>;
  }
  render() {
    return <ReactListView renderItem={this._renderItem} />;
  }
}

class App extends Component {
  render() {
    return <MainView />;
  }
}
export default App;
