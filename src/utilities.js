//cleans up the phone number incase same # includes / or - or ()
export const cleanUpPhoneNumber = address => {
  try {
    address = address.match(/\d/g).join("");
    if (address && address.length > 10 && address[0] === "1") {
      address = address.substr(1, 10);
    }
    return address;
  } catch (e) {
    //not necesarily an error in this case, but a way to to return incase the
    //address are an email address so return original address
    return address;
  }
};
// returns a dictionary of the xml
export const parseXMLtoDict = xml => {
  //holds all of the sms read from xml
  const dict = {};
  const smses = xml.getElementsByTagName("sms");
  for (let sms of smses) {
    let address = sms.attributes.getNamedItem("address").value;
    if (address && address !== "null" && address.length > 0) {
      address = cleanUpPhoneNumber(address);
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
  }
  return dict;
};
