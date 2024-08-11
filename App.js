import { useState, React } from "react";
import { Context } from "./Context";
import AppComponent from "./AppComponent";
function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <Context.Provider value={{ text, setText }}>
        <AppComponent />
      </Context.Provider>
    </div>
  );
}
export default App;