
import { Route, Routes } from "react-router-dom";

//pages
import HOME from "./pages/HOME";
import About from "./pages/About";
import Form from "./pages/Form";

//components
import Header from "./components/Header";




function App() {
  return (
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" element={<HOME />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
      {/* <Header />
      <HOME />
      <Form />
      <About /> */}
    </div>
  );
}

export default App;
