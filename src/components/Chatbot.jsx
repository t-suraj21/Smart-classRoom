import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const styles = {
  chatToggle: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(to right top, #2563eb, #3b82f6, #60a5fa)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    zIndex: 50,
    fontSize: '20px',
  },

  chatWindow: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '90%',
    maxWidth: '384px',
    height: '80%',
    maxHeight: '600px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 50,
    transition: 'all 0.5s',
  },

  header: {
    padding: '16px 24px',
    background: 'linear-gradient(to right, #2563eb, #3b82f6, #60a5fa)',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },

  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    position: 'relative',
    zIndex: 10,
  },

  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },

  messageContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '16px 24px',
    background: 'linear-gradient(to bottom, #f9fafb, #ffffff)',
  },

  message: {
    maxWidth: '80%',
    padding: '16px',
    marginBottom: '24px',
    borderRadius: '16px',
    transition: 'all 0.3s',
  },

  userMessage: {
    background: 'linear-gradient(to right, #2563eb, #3b82f6)',
    color: 'white',
    marginLeft: 'auto',
    borderBottomRightRadius: '0',
    boxShadow: '0 4px 12px rgba(59,130,246,0.2)',
  },

  botMessage: {
    backgroundColor: 'white',
    color: '#1f2937',
    marginRight: 'auto',
    borderBottomLeftRadius: '0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },

  inputArea: {
    padding: '16px',
    borderTop: '1px solid #f3f4f6',
    backgroundColor: 'white',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },

  input: {
    width: '100%',
    padding: '12px 24px',
    borderRadius: '9999px',
    backgroundColor: '#f3f4f6',
    border: '1px solid transparent',
    transition: 'all 0.3s',
    fontSize: '16px',
    marginBottom: '12px',
  },

  sendButton: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #2563eb, #3b82f6)',
    color: 'white',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    marginLeft: 'auto',
    fontSize: '20px', // Adjust icon size
  },
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      role: 'user', 
      content: input, 
      timestamp: new Date().toLocaleTimeString() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulated API response
    setTimeout(() => {
      const botMessage = {
        role: 'bot',
        content: 'This is a demo response.',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          ...styles.chatToggle,
          transform: isOpen ? 'scale(0)' : 'scale(1)',
        }}
      >
        <span style={{ fontSize: '32px' }}>💬</span> {/* Chatbot icon */}
      </button>

      <div style={{
        ...styles.chatWindow,
        transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(16px)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}>
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <div style={styles.avatar}>
              <MessageCircle size={28} color="white" />
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 500 }}>Extern Assistant</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#4ade80', 
                  borderRadius: '50%', 
                  animation: 'pulse 2s infinite' 
                }}></span>
                <p style={{ color: '#bfdbfe', fontSize: '14px' }}>Online</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'rgba(255,255,255,0.8)', 
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={styles.messageContainer}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(msg.role === 'user' ? styles.userMessage : styles.botMessage),
              }}
            >
              <p style={{ fontSize: '14px', lineHeight: 1.5 }}>{msg.content}</p>
              <span style={{ 
                fontSize: '12px', 
                marginTop: '8px', 
                display: 'block',
                color: msg.role === 'user' ? 'rgba(255,255,255,0.8)' : '#9ca3af'
              }}>
                {msg.timestamp}
              </span>
            </div>
          ))}
          {loading && (
            <div style={{ ...styles.message, ...styles.botMessage }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%',
                      animation: `bounce 1s infinite ${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={styles.inputArea}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              style={styles.input}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                ...styles.sendButton,
                opacity: !input.trim() || loading ? 0.5 : 1,
                cursor: !input.trim() || loading ? 'not-allowed' : 'pointer',
              }}
            >
              <span style={{ fontSize: '20px' }}>▶</span>
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Chatbot;