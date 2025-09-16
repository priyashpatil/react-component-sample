import { useState } from 'react'

const CopyButton = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      className={`copy-button ${className}`}
      onClick={copyToClipboard}
      title={copied ? "Copied!" : "Copy code"}
      aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
    >
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="m5,15-2,0c-1.1,0 -2,-0.9 -2,-2l0,-9c0,-1.1 0.9,-2 2,-2l9,0c1.1,0 2,0.9 2,2l0,2"></path>
        </svg>
      )}
      <span className="copy-button-text">
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  )
}

export default CopyButton