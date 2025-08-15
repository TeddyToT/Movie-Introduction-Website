import AppLayout from "./layouts/AppLayout";
import "./App.css";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/Details/MovieDetails";
import TvSeriesDetail from "./pages/Details/TvSeriesDetail";
import MoviePage from "./pages/MoviePage/MoviePage";
import TVSeriesPage from "./pages/TVSeriesPage/TVSeriesPage";
import NotFound from "./pages/NotFound/NotFound";
import AutoTop from "./components/Config/AutoTop";
import { BrowserRouter as Router, Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Router>
        <AutoTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv" element={<TVSeriesPage />} />
            <Route path="/tv/:id" element={<TvSeriesDetail />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
