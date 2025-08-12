import AppLayout from "./layouts/AppLayout";
import "./App.css";
import ListSilde from "./components/ListSlide/ListSilde";
import { BrowserRouter as Router, Routes, Route } from "react-router";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<ListSilde title={"trending movies"} />} />
          </Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;
