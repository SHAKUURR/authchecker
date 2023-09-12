import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}
function Form() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  function handleName(e) {
    setName(e.target.value);
  }
  function handlePswd(e) {
    setPswd(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !pswd) return;
    alert(`Your name is ${name} and your password is ${pswd}`);
  }
  return (
    <div className="container">
      <p>Welcome to Auth Checker</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={pswd}
          onChange={handlePswd}
        />
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Made with <em>pain</em> by Shakuur 😑
      </p>
    </footer>
  );
}
