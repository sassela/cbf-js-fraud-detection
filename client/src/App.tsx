import React from "react";
import "./App.css";
import TransactionPage from "./pages/TransactionPage";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Fraud Detection App
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <TransactionPage/>
    </div>
  );
}

export default App;
