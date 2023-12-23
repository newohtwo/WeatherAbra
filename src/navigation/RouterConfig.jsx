// @ts-ignore
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound.";
import Home from "../pages/Home/Home";
import { Favorites } from "../components/Favorites";
export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:favoriteKey/:favoriteName" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
};
