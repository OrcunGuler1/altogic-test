import { useState } from "react"

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column", width: "20%" }}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  )
}

export default App
