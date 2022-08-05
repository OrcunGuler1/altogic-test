import { useState } from "react"
import { altogic } from "./altogic"
function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [result, setResult] = useState()
  const [error, setError] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await altogic.auth.signUpWithEmail(email, password)
    if (res.errors) {
      console.log(res.errors)
      setError(true)
    }
    console.log(res)
    setResult(res)
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "20%" }}
        onSubmit={handleSubmit}
      >
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
        <button type="submit">Submit</button>
      </form>
      {error ? result.errors.map((e) => <p>{e.message}</p>) : null}
      {!error && result && <p>{result.user.email}</p>}
    </div>
  )
}

export default App
