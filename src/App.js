import { Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/";
import { SwContextProvider } from "./context/SwContext";
import "./App.css";

// Performing routing and calling components.
function App() {
  return (
    <div className="App">
      <SwContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starship/:id" element={<Detail />} />
        </Routes>
      </SwContextProvider>
    </div>
  );
}

export default App;
