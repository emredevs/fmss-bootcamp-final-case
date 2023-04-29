import "./App.css";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { SwContextProvider } from "./context/SwContext";
import { Route, Routes } from "react-router-dom";

// routing işleminin yapılması ve componentslerin çağarılması
function App() {
  return (
    <div className="App">
      <SwContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </SwContextProvider>
    </div>
  );
}

export default App;
