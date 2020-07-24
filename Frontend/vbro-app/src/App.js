import React from 'react';
import './App.css';
import Navbar from "./Components/CommonComponents/Navbar/Navbar.jsx"
import Footer from "./Components/CommonComponents/Footer/Footer.jsx"
import PublicRouter from "./Router/PublicRouter"

function App() {
  return (
    <div className="App">
       <Navbar/>
       <PublicRouter/>
       <Footer/>

    </div>
  );
}

export default App;
