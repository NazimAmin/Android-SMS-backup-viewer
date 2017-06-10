import React from "react";
import ReactFileReader from "react-file-reader";
import { parseXMLtoDict } from "../utilities";
import SMSView from "./SMSView";
import "./App.css";
import { UploadButton } from "./Style";

export default class MainView extends React.Component {
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
    return (
      <div>
        {!this.state.uploaded
          ? <div className="App">
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
                  handleFiles={this.handleFiles}>
                  <UploadButton primary>Upload XML file</UploadButton>
                </ReactFileReader>
              </div>
            </div>
          : <SMSView smses={this.state.smses} />}
      </div>
    );
  }
}
