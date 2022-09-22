import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={callApi}>Call API</button>
          <button onClick={callApi2}>Call API2</button>
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
function callApi2() {
    fetch("https://test-node-server-api.herokuapp.com/details2", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
}

export default App;
