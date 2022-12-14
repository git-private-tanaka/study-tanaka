import React from 'react'
import * as ReactDOM from 'react-dom/client'
import Game from './components/Game'
import './index.css'

const rootElement = document.getElementById('root')
if (rootElement == null) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)
root.render(<Game />)
