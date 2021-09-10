import "./App.css";
import { ContextProvider } from "./context/Context";
import Router from "./router";

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </div>
  );
}

export default App;
