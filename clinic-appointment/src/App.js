import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.src = 'https://app.engati.com/static/js/widget.js?config=' + JSON.stringify({
      bot_key: "0ceba0209395447d",
      welcome_msg: true,
      branding_key: "default",
      server: "https://app.engati.com",
      e: "p"
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://e7.pngegg.com/pngimages/819/834/png-clipart-red-cross-logo-hospital-medical-sign-health-medical-cross-logo-sign.png" alt="logo" />
        <h1>
          Welcome to Abhishek Medical Center
        </h1>
        <p>
          Please schedule an appointment with our chatbot below
        </p>
      </header>
    </div>
  );
}

export default App;
