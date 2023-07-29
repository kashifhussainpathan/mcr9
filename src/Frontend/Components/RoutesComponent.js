import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { CategoryWiseVideoList } from "../Pages/CategoryWiseVideoList/CategoryWiseVideoList";
import { Watchlater } from "../Pages/Watchlater/Watchlater";
import { Explore } from "../Pages/Explore/Explore";
import { WatchVideo } from "../Pages/WatchVideo.js/WatchVideo";

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/watchvideo/:vidId" element={<WatchVideo />} />
        <Route
          path="/catVideoList/:category"
          element={<CategoryWiseVideoList />}
        />
      </Routes>
    </>
  );
};
