import React from "react";
import MyPhoto from "./Component/Profile/ProfilePhoto";
import MyAddress from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyPhoto />
      <FullName/>
      <MyAddress/>
      </header>
    </div>
  );
}
export default App;
