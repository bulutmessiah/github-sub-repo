import React from "react";
import pedias from "../emojipedia"
import Entry from "./Entry"

function divCreater(pedia) {
  return <Entry
    key={pedia.id}
    id={pedia.id}
    emoji={pedia.emoji}
    name={pedia.name}
    meaning={pedia.meaning}
    />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {pedias.map(divCreater)}
      </dl>
    </div>
  );
}

export default App;
