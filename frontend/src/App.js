import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css';

function App() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessages()
  }, [])

  

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/messages")
      setMessages(response.data)
    }catch(error){
      console.error("Error en fetching: ", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (message.trim() === "") return
    await axios.post("http://localhost:3001/messages", { message })
    setMessage("")
    fetchMessages()
  }

  return(
    <div className="app-container">
      <h1>Mensajes interactivos</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje aquí ... "
        required
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
