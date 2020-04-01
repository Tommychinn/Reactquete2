import React from "react";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Contact
        name="Peter Palmer"
        online
        image="https://randomuser.me/api/portraits/men/85.jpg"
      />

      <Contact
        name="Marlene Marshall"
        offline
        image="https://randomuser.me/api/portraits/women/90.jpg"
      />

      <Contact
        name="Robert Hughes"
        online
        image="https://randomuser.me/api/portraits/men/82.jpg"
      />
    </div>
  );
}

export default App;
