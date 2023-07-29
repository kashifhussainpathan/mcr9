import "./WatchVideo.css";

import { useContext, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { VideoContext } from "../../Context/VideoContext";

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
    state: { videos, watchLater, notes, noteValue },
    dispatch,
    addToWatchLater,
    removeFromWatchLater,
    handleAddNoteClick,
  } = useContext(VideoContext);

  const videoDetails = videos.find((video) => video._id == vidId);

  const { _id, title, views, src, creator } = videoDetails;

  const isWatchLater = (_id) => {
    return watchLater.some((video) => video._id === _id);
  };

  const handlePlaylistClick = () => {
    setShowAddToPlaylist(!showAddToPlaylist);
  };

  const handleInputChange = (e) => {
    dispatch({ type: "NOTE-VALUE", payload: e.target.value });
  };

  return (
    <div className="watchVideo">
      <div>
        <ReactPlayer url={src} controls />

        <div className="watchVideo-details">
          <div>
            <img src="https://picsum.photos/40/40" alt="dp" />
            <h2>{title} </h2>
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
                  <div className="playlist-modal">
                    <h4> Add To Playlist </h4>
                    <input
                      type="text"
                      placeholder="Enter title of your playlist"
                    />
                    <input type="text" placeholder="Write a description" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="add-notes">
                <MdModeEdit onClick={() => setShowAddNotes(!showAddNotes)} />
                {showAddNotes && (
                  <div className="add-notes-modal">
                    <div>
                      <input
                        type="text"
                        placeholder="Add note"
                        value={noteValue}
                        onChange={handleInputChange}
                      />{" "}
                    </div>

                    <div>
                      {" "}
                      <button onClick={handleAddNoteClick}>
                        {" "}
                        Add Note{" "}
                      </button>{" "}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="notes">
          <h3>Notes</h3>

          {notes.map((note) => (
            <p>{note} </p>
          ))}
        </div>
      </div>

      <div className="suggestions">
        {videos.map(({ thumbnail, title }) => (
          <div className="suggestion-videos">
            <img src={thumbnail} alt={title} />
            <h5>{title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
