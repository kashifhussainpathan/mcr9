import "./WatchVideo.css";

import { useContext, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { VideoContext } from "../../Context/VideoContext";
import { PlaylistModal } from "../../Components/PlaylistModal";
import { AddNote } from "../../Components/AddNote";

import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdModeEdit,
  MdOutlinePlaylistAddCircle,
} from "react-icons/md";

export const WatchVideo = () => {
  const { vidId } = useParams();

  const [showAddToPlaylist, setShowAddToPlaylist] = useState(false);
  const [showAddNotes, setShowAddNotes] = useState(false);

  const {
    state: { videos, watchLater },
    addToWatchLater,
    removeFromWatchLater,
  } = useContext(VideoContext);

  const videoDetails = videos.find((video) => video._id == vidId);

  const { _id, title, src, notes } = videoDetails;

  const isWatchLater = (_id) => {
    return watchLater.some((video) => video._id === _id);
  };

  const handlePlaylistClick = () => {
    setShowAddToPlaylist(!showAddToPlaylist);
  };

  return (
    <div className="watchVideo">
      <div>
        <ReactPlayer url={src} controls />

        <div className="watchVideo-details">
          <div>
            <img src="https://picsum.photos/40/40" alt="dp" />
            <h4>{title} </h4>
          </div>

          <div>
            {isWatchLater(_id) ? (
              <MdWatchLater onClick={() => removeFromWatchLater(_id)} />
            ) : (
              <MdOutlineWatchLater onClick={() => addToWatchLater(_id)} />
            )}

            <div>
              <div className="playlist-icon">
                <MdOutlinePlaylistAddCircle onClick={handlePlaylistClick} />

                {showAddToPlaylist && (
                  <PlaylistModal videoDetails={videoDetails} />
                )}
              </div>
            </div>

            <div>
              <div className="add-notes">
                <MdModeEdit onClick={() => setShowAddNotes(!showAddNotes)} />
                {showAddNotes && <AddNote video={videoDetails} />}
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="notes">
          <h3>Notes</h3>

          {notes?.map(({ id, text }) => (
            <p key={id}>{text} </p>
          ))}
        </div>
      </div>

      <div className="suggestions">
        {videos.map(({ _id, thumbnail, title }) => (
          <div className="suggestion-videos" key={_id}>
            <img src={thumbnail} alt={title} />
            <h5>{title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
