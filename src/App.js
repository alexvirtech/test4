import './Miligram.css'
import React,{useState} from 'react'

import CreateNew from './components/createNew'
import Dashboard from './components/dashboard'
import Home from './components/home'
import NewCreated from './components/newCreated'

function App() {
  const [state,setState] = useState({page: 'home'})
  const pages = {
    'home': <Home cb={(p)=>setPage(p)}/>,
    'new': <CreateNew />,
    'created': <NewCreated />,
    'dashboard':<Dashboard />
  }
  const setPage = (p)=>{
    setState({...state,page:p})
  }
  return (
    <div className="App container">
        <h1>Ethereum Wallet</h1>
          {pages[state.page]}
    </div>
  )
}

export default App
