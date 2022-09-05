import React from 'react';
import Qrscan from './Qrscan';
import PWAPrompt from 'react-ios-pwa-prompt'

function App() {
  return (
    <div>
      <h2 style={{ textAlign:"center", backgroundColor:"yellow"}}>Dunlop Hiflex Proof of concept</h2>
      <h1 style={{ textAlign:"center", marginTop:"-10px", marginBottom:"25px"}}>Scan QR-code</h1>
      <Qrscan />
      <PWAPrompt 
        delay={1000} 
        promptOnVisit={1} 
        timesToShow={3} 
        copyClosePrompt="Close" 
        permanentlyHideOnDismiss={false}
        copyTitle="Install the app on your device"
      />
    </div>
  );
}

export default App;
