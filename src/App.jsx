import "./App.css";

import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <div>
      <Navigation />
      <Contact />
      <Home/>
    </div>
  );
};

export default App;
