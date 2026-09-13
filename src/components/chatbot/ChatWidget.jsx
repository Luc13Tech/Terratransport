import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Bonjour 👋 Bienvenue chez TerraTransport. Comment pouvons-nous vous aider ?',
    },
  ])

  const handleSend = () => {
    const text = message.trim()

    if (!text) return

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text,
      },
      {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Merci pour votre message. Notre équipe TerraTransport pourra vous répondre prochainement.',
      },
    ])

    setMessage('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
          {/* En-tête */}
          <div className="flex items-center justify-between bg-green-700 px-4 py-3 text-white">
            <div>
              <p className="font-semibold">TerraTransport</p>
              <p className="text-xs text-green-100">
                Assistant client
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full px-2 py-1 text-xl hover:bg-white/10"
              aria-label="Fermer le chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 space-y-3 overflow-y-auto bg-gray-50 p-4">
            {messages.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  item.sender === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    item.sender === 'user'
                      ? 'rounded-br-md bg-green-700 text-white'
                      : 'rounded-bl-md bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* Zone de saisie */}
          <div className="flex gap-2 border-t bg-white p-3">
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Écrivez votre message..."
              className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              aria-label="Message"
            />

            <button
              type="button"
              onClick={handleSend}
              className="rounded-xl bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-2xl text-white shadow-xl transition hover:scale-105 hover:bg-green-800"
        aria-label="Ouvrir le chatbot"
        title="Chat TerraTransport"
      >
        💬
      </button>
    </>
  )
}
