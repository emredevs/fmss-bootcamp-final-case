import "./App.css";
import Form from "./components/From/Form";
import List from "./components/List/List";
import { SwContextProvider } from "./context/SwContext";
function App() {
  return (
    <div className="App">
      <SwContextProvider>
        <Form />
        <List />
      </SwContextProvider>
    </div>
  );
}

export default App;
