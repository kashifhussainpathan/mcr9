import { useContext } from "react";
import "./App.css";
import { RoutesComponent } from "./Frontend/Components/RoutesComponent";
import { Sidebar } from "./Frontend/Components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="main">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
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
