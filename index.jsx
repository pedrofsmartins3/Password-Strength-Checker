import React from "react"
import ReactDOM from "react-dom/client"
import PasswordCheck from "./PasswordCheck.jsx"

function App() {

  const [password, setPassword] = React.useState("")
  const [type, setType] = React.useState("password")

  function handleChange(e) {
    setPassword(e.target.value)
  }

  const styles = {display: `${password.length > 0 ? "block" : "none"}`}

  function show() {
    setType(type === "password" ? "text" : "password")
  }

  const textShowBtn = `${type === "password" ? "Show" : "Hide"}`


  return (
    <>
      <div className="container">
        <h1>Password Strength Check</h1>
        <div className="input-div">
          <input className="pass-input" type={type} autoFocus id="pass" name="password" placeholder="password"
          onChange={handleChange}/>
          <button id="show" class="show" style={styles} onClick={show}>{textShowBtn}</button>
        </div>

        <PasswordCheck password={password}/>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
