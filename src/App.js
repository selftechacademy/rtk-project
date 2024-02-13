import { useSelector } from "react-redux";
import { CounterApp, LoginApp } from "./applications";

import "./App.css";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user.userInfo);

  return (
    <div className="App">{isAuthenticated ? <CounterApp /> : <LoginApp />}</div>
  );
}

export default App;
