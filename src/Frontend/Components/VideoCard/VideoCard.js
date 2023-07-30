import { useContext } from "react";
import { VideoContext } from "../../Context/VideoContext";

import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const VideoCard = ({ _id, title, views, thumbnail, creator }) => {
  const {
    addToWatchLater,
    state: { watchLater },
    removeFromWatchLater,
  } = useContext(VideoContext);

  const isWatchLater = (_id) => {
    return watchLater.some((video) => video._id === _id);
  };

  return (
    <div key={_id} className="video-wrapper">
      <div className="video-image">
        <NavLink to={`/watchvideo/${_id}`}>
          <img src={thumbnail} alt={title} />
        </NavLink>
        <span>
          {" "}
          {isWatchLater(_id) ? (
            <MdWatchLater onClick={() => removeFromWatchLater(_id)} />
          ) : (
            <MdOutlineWatchLater onClick={() => addToWatchLater(_id)} />
          )}
        </span>
      </div>
      <div className="video-details">
        <div className="dp-and-title">
          <img src="https://picsum.photos/40/40" alt="dp" />
          <h4> {title}</h4>
        </div>

        <div className="views-creator">
          {views} | {creator}
        </div>
      </div>
    </div>
  );
};
