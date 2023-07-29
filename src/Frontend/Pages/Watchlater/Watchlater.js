import "./Watchlater.css";

import { useContext } from "react";
import { VideoContext } from "../../Context/VideoContext";
import { VideoCard } from "../../Components/VideoCard/VideoCard";

export const Watchlater = () => {
  const {
    state: { watchLater },
  } = useContext(VideoContext);

  return (
    <div className="watchlater">
      <h2> Watch Later </h2>
      {watchLater.length > 0 ? (
        <div className="watchlater-wrapper">
          {watchLater?.map((video) => (
            <VideoCard {...video} key={video._id} />
          ))}
        </div>
      ) : (
        <div className="watchlater-empty">
          {" "}
          <h3> Watch later is empty </h3>{" "}
        </div>
      )}
    </div>
  );
};
