import React from 'react';
import './App.css';
import Clock from './component/Clock'
function App() {
  return (
<div>
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            <div className="text-center">
              <center><h1> Wall 
                Clock</h1></center>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Clock size={400} timeFormat="24hour" hourFormat="standard" />
          </div>
        </div>
      </div>
  );
}

export default App;