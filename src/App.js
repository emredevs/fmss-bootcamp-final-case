import "./App.css";
import Description from "./components/Descritions/Description";
import Form from "./components/From/Form";
import List from "./components/List/List";
import { SwContextProvider } from "./context/SwContext";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SwContextProvider>
        <Form />

        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </SwContextProvider>
    </div>
  );
}

export default App;
