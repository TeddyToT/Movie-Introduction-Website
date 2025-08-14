import AppLayout from "./layouts/AppLayout";
import "./App.css";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/Details/MovieDetails";
import TvSeriesDetail from "./pages/Details/TvSeriesDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv/:id" element={<TvSeriesDetail />} />
          </Route>
        </Routes>
      </Router>


    </>
  );
}

export default App;
