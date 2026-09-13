import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { suggestedQuestions, findAnswer } from './faqData'
import { site, buildWhatsappLink } from '../../data/site'

const GREETING = {
  id: 'greeting',
  from: 'bot',
  text: `Bonjour 👋 Je suis l'assistant ${site.shortName}. Posez-moi une question, ou choisissez un sujet ci-dessous.`,
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  function pushBotAnswer(question) {
    const match = findAnswer(question)
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), from: 'user', text: question },
      match
        ? { id: crypto.randomUUID(), from: 'bot', text: match.answer }
        : {
            id: crypto.randomUUID(),
            from: 'bot',
            fallback: true,
            text:
              "Je n'ai pas de réponse toute prête pour cette question précise, mais l'équipe se fera un plaisir d'y répondre directement.",
          },
    ])
  }

  function handleSend(e) {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    pushBotAnswer(value)
    setInput('')
  }

  const whatsappHref = buildWhatsappLink({
    name: '',
    phone: '',
    category: 'Question via le chat du site',
    message: '',
  })

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-forest text-ivory shadow-2xl flex items-center justify-center"
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm bg-ivory rounded-sm shadow-2xl border border-forest/10 flex flex-col overflow-hidden"
            style={{ height: 'min(70vh, 560px)' }}
          >
            <div className="bg-forest text-ivory px-5 py-4 flex items-center gap-3 shrink-0">
              <img src="/images/logo/logo-truck.jpg" alt={site.name} className="h-8 w-8 rounded-full object-cover" />
              <div>
                <p className="font-display text-sm leading-tight">{site.shortName}</p>
                <p className="font-mono text-[9px] tracking-widest2 uppercase text-brass">Assistant</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === 'user' ? 'bg-forest text-ivory' : 'bg-sage/40 text-charcoal'
                    }`}
                  >
                    {m.text}
                    {m.fallback && (
                      <div className="mt-3 flex flex-col gap-2">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-center rounded-full bg-forest text-ivory px-3 py-2 hover:bg-forest-light transition-colors"
                        >
                          Écrire sur WhatsApp
                        </a>
                        <Link
                          to="/contact"
                          onClick={() => setOpen(false)}
                          className="text-xs text-center rounded-full border border-forest/30 text-forest px-3 py-2 hover:border-forest transition-colors"
                        >
                          Aller à la page Contact
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {messages.length <= 1 && (
                <div className="flex flex-col gap-2 pt-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => pushBotAnswer(q)}
                      className="text-left text-xs text-forest border border-forest/20 rounded-full px-3 py-2 hover:border-brass hover:bg-brass/5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="border-t border-forest/10 p-3 flex items-center gap-2 shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question…"
                className="flex-1 text-sm bg-white border border-charcoal/15 rounded-full px-4 py-2 focus:border-forest outline-none"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-forest text-ivory flex items-center justify-center shrink-0 hover:bg-forest-light transition-colors"
                aria-label="Envoyer"
              >
                <Send size={15} />
              </button>
            </form>

            <a
              href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-[11px] text-charcoal/50 py-2 border-t border-forest/5 hover:text-forest transition-colors"
            >
              <Phone size={12} /> Ou appelez directement le {site.phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
