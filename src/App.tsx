import { useState } from "react";
import { Developer } from "./Components/DeveloperCard";
import DeveloperList from "./Components/DeveloperList";

function App() {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [inputName, setInputName] = useState<string>("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "space-between",
      }}
    >
      <input
        type="text"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setDevelopers([...developers, { name: inputName }]);
          setInputName("");
        }}
      >
        Add Developer
      </button>
      <DeveloperList developers={developers} />
    </div>
  );
}

export default App;
