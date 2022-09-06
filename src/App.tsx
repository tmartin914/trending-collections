import { useState } from 'react';
import TrendingCollections from './components/TrendingCollections/TrendingCollections';
import { WalletConnection } from "./components/WalletConnection/WalletConnection";

function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  /**
   * Gets the wallet connection status
   * @returns wallet connection status as a string
   */
  function getWalletConnStatus(): string{
    return walletConnected ? 'Connected' : 'Disconnected';
  }

  return (
    <>
      <h1>Trending Collections App</h1>
      <div>Status: Wallet {getWalletConnStatus()}</div>
      <WalletConnection walletConnected={walletConnected} setWalletConnected={setWalletConnected}></WalletConnection>
      <TrendingCollections walletConnected={walletConnected} setWalletConnected={setWalletConnected}></TrendingCollections>
    </>
  );
}

export default App;
