import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";

let name="annu"
function App() {
  const [mode, setmode] = useState('light');//whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

const showalert = (message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert(null)
}, 3000);

}

  const toggleMode=()=>{
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor = 'black';
    showalert("Dark mode has been enabled","danger")
  }
else{
  setmode('light');
  document.body.style.backgroundColor = 'white';
  showalert("Light mode has been enabled","success")

}
}

  return (
    <>
  {/* {/* <Router> */}
<Navbar title="change-app" aboutLink="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  {/* <About/>  */}
  <div className="container">
{/* {/* 
  <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          
          <Route exact path="/" element={ */}
  <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} />
          {/* }
            >
          </Route>
        </Routes> */}

  </div>
{/* </Router> */}

</>
  );
  }

export default App;
