import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TexForm from './components/TexForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App( props ) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2e3a45";
      document.body.style.color = "white";
      showAlert("Theme set to Dark Mode", "Success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Theme set to Light Mode", "Success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      mssg : message,
      type : type
    })
    setTimeout( () => setAlert(null), 1500);
  }
  return (
    <>
      <Router>
        <Navbar
          name="TextUtils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          // showAlert={showAlert}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TexForm heading="Enter the text" showAlert={showAlert} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
