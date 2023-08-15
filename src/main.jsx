import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
/*import HookApp from './HookApp.jsx'*/
/*import CounterApp from "./01-useState/CounterApp.jsx";*/
import CounterAppHook from "./01-useState/CounterAppHook.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<HookApp />*/}
    {/*<CounterApp/>*/}
    <CounterAppHook/>
  </React.StrictMode>,
)
