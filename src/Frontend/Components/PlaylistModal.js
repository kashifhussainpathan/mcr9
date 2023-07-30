import { useContext } from "react";
import { VideoContext } from "../Context/VideoContext";

import { RxCross2 } from "react-icons/rx";

export const PlaylistModal = ({ videoDetails }) => {
  const {
    state: { playlists },
    playlistInputs,
    setplaylistInputs,
    handleCreateNewPlaylist,
    handleAddToPlaylist,
    handleDeletePlaylist,
  } = useContext(VideoContext);

  return (
    <>
      <div className="playlist-modal">
        <h4> Add To Playlist </h4>
        <input
          type="text"
          placeholder="Enter title of your playlist"
          value={playlistInputs?.title}
          onChange={(e) =>
            setplaylistInputs({
              ...playlistInputs,
              title: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Write a description"
          value={playlistInputs?.description}
          onChange={(e) =>
            setplaylistInputs({
              ...playlistInputs,
              description: e.target.value,
            })
          }
        />

        <button onClick={handleCreateNewPlaylist}> Create New Playlist </button>

        <hr className="hr" />

        <div className="playlists-name">
          {playlists?.map(({ title }, index) => (
            <div key={index} className="playlist-name">
              <h4 onClick={() => handleAddToPlaylist(videoDetails, index)}>
                {title}
              </h4>

              <RxCross2 onClick={() => handleDeletePlaylist(index)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
