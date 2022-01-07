import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useWeb3 } from '@3rdweb/hooks'

function App() {

  const {connectWallet, address, error, provider} = useWeb3();
  console.log("Address : ", address)

  if(!address)
  return (
    <div className="App">
      <h1>Welcome to iiitk-dao</h1>
      <button onClick={() => connectWallet("injected")}>
        Connect your wallet
      </button>
    </div>
  );

  return(
    <div className="App">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  )
}

export default App;
