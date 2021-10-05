import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'

function App() {

  const handleScroll = (e) =>{
    console.log(e);
  }

  return (
    <div onScroll={e => handleScroll(e)} className="app">
      <Header/>
      <Banner/>
    </div>
  )
}

export default App
