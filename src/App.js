import { useContext } from "react";
import "./App.css";
import { RoutesComponent } from "./Frontend/Components/RoutesComponent";
import { Sidebar } from "./Frontend/Components/Sidebar/Sidebar";
import { VideoContext } from "./Frontend/Context/VideoContext";

function App() {
  return (
    <div className="main">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;
