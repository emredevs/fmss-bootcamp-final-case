import "./App.css";
import Description from "./components/Descritions/Description";
import Form from "./components/From/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { SwContextProvider } from "./context/SwContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
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
