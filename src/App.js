import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import Section1 from "./components/Section1";
import BodyLayout from "./Layouts/BodyLayout";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Section1 />
      <BodyLayout />
    </div>
  );
}

export default App;
