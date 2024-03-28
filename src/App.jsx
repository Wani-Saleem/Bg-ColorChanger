import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [Color,setColor]=useState("Aqua")
  return (
    <div className="container12" style={{backgroundColor: Color}}>
      <div className="d-inline-flex p-3 bg-white">
        <button onClick={()=>setColor("Blue")} type="button" className="btn btn-primary">
          Blue
        </button>
        <button onClick={()=>setColor("Grey")} type="button" className="btn btn-secondary">
          Grey
        </button>
        <button onClick={()=>setColor("Green")} type="button" className="btn btn-success">
          Green
        </button>
        <button onClick={()=>setColor("Red")} type="button" className="btn btn-danger">
          Red
        </button>
        <button onClick={()=>setColor("Yellow")} type="button" className="btn btn-warning">
          Yellow
        </button>
        <button onClick={()=>setColor("Aqua")} type="button" className="btn btn-info">
          Aqua
        </button>
        <button onClick={()=>setColor("White")}  type="button" className="btn btn-light">
          White
        </button>
        <button onClick={()=>setColor("Black")} type="button" className="btn btn-dark">
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
