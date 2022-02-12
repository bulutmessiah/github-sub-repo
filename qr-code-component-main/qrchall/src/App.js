import React from "react";
import qr from "./images/qr-code.png";
import Attribution from "./Attribution";

function App() {
  return (
    <div>
    <div className="App">
      <img src={qr} alt="qrcode" />
      <h2>Improve your front-end skills by building projects</h2>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
    <Attribution />
  </div>
  );
}

export default App;
