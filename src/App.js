import "./App.css";
import Header from "./Components/Header/Header";
import Aside from "./Components/Main/Aside/Aside";
import Main from "./Components/Main/Content/Content";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <NavBar />

        <div className="main">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
