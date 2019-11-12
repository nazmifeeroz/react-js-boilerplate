import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const title = 'This is a title'

ReactDOM.render(<App title={title} />, document.getElementById('app'))

module.hot.accept()
