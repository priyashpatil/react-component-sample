import { useState, useEffect } from 'react'
import Checkbox from '@priyashpatil/react-checkbox'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import CopyButton from './CopyButton'
import './App.css'

function App() {
  const [states, setStates] = useState({
    basic: true,
    primary: true,
    secondary: true,
    success: true,
    warning: true,
    error: true,
    neutral: true,
    small: true,
    medium: false,
    large: true,
    customOrange: true,
    indeterminate: false
  })

  const [activeSection, setActiveSection] = useState('overview')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const updateState = (key) => (e) => {
    setStates(prev => ({ ...prev, [key]: e.target.checked }))
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  // Track active section for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'installation', 'examples', 'variants', 'sizes', 'api']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial active section
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Initialize highlight.js
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className="docs-layout">
      {/* Mobile Navigation Toggle */}
      <button
        className="mobile-nav-toggle"
        onClick={toggleMobileNav}
        aria-label="Toggle navigation menu"
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isMobileNavOpen ? 'active' : ''}`}
        onClick={closeMobileNav}
      ></div>

      {/* Left Sidebar */}
      <nav className={`sidebar ${isMobileNavOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h1>React UI Components</h1>
          <p className="version">v1.0.0</p>
        </div>

        <div className="sidebar-nav">
          <div className="nav-section">
            <h6 className="nav-section-title">Getting started</h6>
            <a href="#" className="nav-link">Introduction</a>
            <a href="#" className="nav-link">Installation</a>
          </div>

          <div className="nav-section">
            <h6 className="nav-section-title">Components</h6>
            <a href="#" className="nav-link">Button</a>
            <a href="#" className="nav-link active">Checkbox</a>
            <a href="#" className="nav-link">Input</a>
            <a href="#" className="nav-link">Modal</a>
            <a href="#" className="nav-link">Toast</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Overview */}
          <section id="overview" className="content-section">
          <h1>Checkbox</h1>
          <p className="lead">
            Custom checkbox component with SVG-based styling, color variants, and full accessibility support.
          </p>

          <div className="example-container">
            <div className="example">
              <Checkbox
                checked={states.basic}
                onChange={updateState('basic')}
                label="Default checkbox"
              />
            </div>
            <div className="code-block">
              <CopyButton text={`<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Default checkbox"
/>`} />
              <pre><code className="language-jsx">{`<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Default checkbox"
/>`}</code></pre>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="content-section">
          <h2>Installation</h2>
          <div className="code-block">
            <CopyButton text="npm install @priyashpatil/react-checkbox" />
            <pre><code className="language-bash">npm install @priyashpatil/react-checkbox</code></pre>
          </div>

          <h3 id="import">Import</h3>
          <div className="code-block">
            <CopyButton text="import Checkbox from '@priyashpatil/react-checkbox'" />
            <pre><code className="language-jsx">{`import Checkbox from '@priyashpatil/react-checkbox'`}</code></pre>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="content-section">
          <h2>Examples</h2>

          <h3 id="basic-usage">Basic usage</h3>
          <div className="example-container">
            <div className="example">
              <Checkbox
                checked={states.basic}
                onChange={updateState('basic')}
                label="I agree to the terms"
              />
            </div>
            <div className="code-block">
              <CopyButton text={`const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="I agree to the terms"
/>`} />
              <pre><code className="language-jsx">{`const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="I agree to the terms"
/>`}</code></pre>
            </div>
          </div>

          <h3 id="indeterminate-state">Indeterminate state</h3>
          <div className="example-container">
            <div className="example">
              <Checkbox
                indeterminate={true}
                checked={states.indeterminate}
                onChange={updateState('indeterminate')}
                label="Select all items"
              />
            </div>
            <div className="code-block">
              <CopyButton text={`<Checkbox
  indeterminate={true}
  label="Select all items"
/>`} />
              <pre><code className="language-jsx">{`<Checkbox
  indeterminate={true}
  label="Select all items"
/>`}</code></pre>
            </div>
          </div>

          <h3 id="disabled-state">Disabled state</h3>
          <div className="example-container">
            <div className="example">
              <Checkbox disabled label="Disabled option" />
              <Checkbox disabled checked={true} label="Disabled checked" onChange={() => {}} />
            </div>
            <div className="code-block">
              <CopyButton text={`<Checkbox disabled label="Disabled option" />
<Checkbox disabled checked={true} label="Disabled checked" />`} />
              <pre><code className="language-jsx">{`<Checkbox disabled label="Disabled option" />
<Checkbox disabled checked={true} label="Disabled checked" />`}</code></pre>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section id="variants" className="content-section">
          <h2>Variants</h2>
          <p>Use contextual variants to convey meaning.</p>

          <div className="example-container">
            <div className="example">
              <div className="variants-grid">
                <Checkbox variant="primary" checked={states.primary} onChange={updateState('primary')} label="Primary" />
                <Checkbox variant="secondary" checked={states.secondary} onChange={updateState('secondary')} label="Secondary" />
                <Checkbox variant="success" checked={states.success} onChange={updateState('success')} label="Success" />
                <Checkbox variant="warning" checked={states.warning} onChange={updateState('warning')} label="Warning" />
                <Checkbox variant="error" checked={states.error} onChange={updateState('error')} label="Error" />
                <Checkbox variant="neutral" checked={states.neutral} onChange={updateState('neutral')} label="Neutral" />
              </div>
            </div>
            <div className="code-block">
              <CopyButton text={`<Checkbox variant="primary" label="Primary" />
<Checkbox variant="secondary" label="Secondary" />
<Checkbox variant="success" label="Success" />
<Checkbox variant="warning" label="Warning" />
<Checkbox variant="error" label="Error" />
<Checkbox variant="neutral" label="Neutral" />`} />
              <pre><code className="language-jsx">{`<Checkbox variant="primary" label="Primary" />
<Checkbox variant="secondary" label="Secondary" />
<Checkbox variant="success" label="Success" />
<Checkbox variant="warning" label="Warning" />
<Checkbox variant="error" label="Error" />
<Checkbox variant="neutral" label="Neutral" />`}</code></pre>
            </div>
          </div>

          <h3 id="custom-colors">Custom colors</h3>
          <div className="example-container">
            <div className="example">
              <div className="variants-grid">
                <Checkbox color="#ff6b35" checked={states.customOrange} onChange={updateState('customOrange')} label="Custom color" />
              </div>
            </div>
            <div className="code-block">
              <CopyButton text={`<Checkbox color="#ff6b35" label="Custom color" />`} />
              <pre><code className="language-jsx">{`<Checkbox color="#ff6b35" label="Custom color" />`}</code></pre>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section id="sizes" className="content-section">
          <h2>Sizes</h2>
          <div className="example-container">
            <div className="example">
              <div className="sizes-demo">
                <Checkbox size="small" checked={states.small} onChange={updateState('small')} label="Small" />
                <Checkbox size="medium" checked={states.medium} onChange={updateState('medium')} label="Medium" />
                <Checkbox size="large" checked={states.large} onChange={updateState('large')} label="Large" />
              </div>
            </div>
            <div className="code-block">
              <CopyButton text={`<Checkbox size="small" label="Small" />
<Checkbox size="medium" label="Medium" />
<Checkbox size="large" label="Large" />`} />
              <pre><code className="language-jsx">{`<Checkbox size="small" label="Small" />
<Checkbox size="medium" label="Medium" />
<Checkbox size="large" label="Large" />`}</code></pre>
            </div>
          </div>
        </section>

        {/* API */}
        <section id="api" className="content-section">
          <h2>API</h2>

          <h3 id="props">Props</h3>
          <div className="table-container">
            <table className="api-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>checked</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Whether the checkbox is checked</td>
                </tr>
                <tr>
                  <td><code>onChange</code></td>
                  <td><code>function</code></td>
                  <td>-</td>
                  <td>Callback when the state changes</td>
                </tr>
                <tr>
                  <td><code>label</code></td>
                  <td><code>string</code></td>
                  <td>-</td>
                  <td>Label text</td>
                </tr>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'</code></td>
                  <td><code>'primary'</code></td>
                  <td>Color variant</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>'small' | 'medium' | 'large'</code></td>
                  <td><code>'medium'</code></td>
                  <td>Size variant</td>
                </tr>
                <tr>
                  <td><code>color</code></td>
                  <td><code>string</code></td>
                  <td>-</td>
                  <td>Custom hex color</td>
                </tr>
                <tr>
                  <td><code>disabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Whether disabled</td>
                </tr>
                <tr>
                  <td><code>indeterminate</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Indeterminate state</td>
                </tr>
                <tr>
                  <td><code>error</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Error state</td>
                </tr>
                <tr>
                  <td><code>className</code></td>
                  <td><code>string</code></td>
                  <td>-</td>
                  <td>Additional CSS class</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        </div>
      </main>

      {/* Right Table of Contents */}
      <aside className="toc">
        <div className="toc-header">
          <h5>On this page</h5>
        </div>
        <nav className="toc-nav">
          <a
            href="#overview"
            className={activeSection === 'overview' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
          >
            Overview
          </a>
          <a
            href="#installation"
            className={activeSection === 'installation' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('installation'); }}
          >
            Installation
          </a>
          <a
            href="#import"
            className="toc-sub"
            onClick={(e) => { e.preventDefault(); scrollToSection('import'); }}
          >
            Import
          </a>
          <a
            href="#examples"
            className={activeSection === 'examples' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('examples'); }}
          >
            Examples
          </a>
          <a
            href="#basic-usage"
            className="toc-sub"
            onClick={(e) => { e.preventDefault(); scrollToSection('basic-usage'); }}
          >
            Basic usage
          </a>
          <a
            href="#indeterminate-state"
            className="toc-sub"
            onClick={(e) => { e.preventDefault(); scrollToSection('indeterminate-state'); }}
          >
            Indeterminate state
          </a>
          <a
            href="#disabled-state"
            className="toc-sub"
            onClick={(e) => { e.preventDefault(); scrollToSection('disabled-state'); }}
          >
            Disabled state
          </a>
          <a
            href="#variants"
            className={activeSection === 'variants' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('variants'); }}
          >
            Variants
          </a>
          <a
            href="#custom-colors"
            className="toc-sub"
            onClick={(e) => { e.preventDefault(); scrollToSection('custom-colors'); }}
          >
            Custom colors
          </a>
          <a
            href="#sizes"
            className={activeSection === 'sizes' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('sizes'); }}
          >
            Sizes
          </a>
          <a
            href="#api"
            className={activeSection === 'api' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('api'); }}
          >
            API
          </a>
          <a
            href="#props"
            className="toc-sub"
            onClick={(e) => { e.preventDefault(); scrollToSection('props'); }}
          >
            Props
          </a>
        </nav>
      </aside>
    </div>
  )
}

export default App