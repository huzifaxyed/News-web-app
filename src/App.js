import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/25/bc/25/25bc2596aa797c1dd821a02b79e1a734.jpg')",
          height:"359vh"
}}
    >
      <Navbar />
      <News />
    </div>
  );
}

export default App;
