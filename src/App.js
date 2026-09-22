import { createElement } from 'react'
import './App.css'

function App() {
  return createElement(
    'div',
    { className: 'container' },
    createElement('h1', null, 'Hola Mundo'),
    createElement('p', null, 'Bienvenido a CitasReact'),
  )
}

export default App