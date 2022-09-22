import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={callApi}>Call API</button>
        </header>
      </div>
  );
}

function callApi() {
    fetch("https://test-node-server-api.herokuapp.com/details", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
}

export default App;
