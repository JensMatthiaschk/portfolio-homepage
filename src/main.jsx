import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeContextProvider from "./components/ThemeContext.jsx"
import i18n from './services/i18n'
import { TailSpin } from 'react-loader-spinner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={
    <div className="spinner">
      <TailSpin
        margin="auto"
        width="50"
        height="50"
        color="currentColor"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true} />
    </div>}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.Suspense>
)
