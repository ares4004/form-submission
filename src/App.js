import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onButtonClick = () => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <div>Form</div>
      <input
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <input
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <button onClick={onButtonClick}>Send</button>
    </div>
  );
}

export default App;
