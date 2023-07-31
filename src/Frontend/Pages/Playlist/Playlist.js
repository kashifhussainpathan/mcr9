import "./Playlist.css";

import { useContext, useState } from "react";
import { VideoContext } from "../../Context/VideoContext";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { PlaylistModal } from "../../Components/PlaylistModal";

export const Playlist = () => {
  const {
    state: { playlists },
    handleDeletePlaylist,
    showPlaylistModal,
    setShowPlaylistModal,
  } = useContext(VideoContext);

  return (
    <>
      <h2> Playlists</h2>
      <div className="playlists">
        <div className="playlists-wrapper">
          {playlists?.map(({ title, description, img }, index) => (
            <div className="playlist-card" key={index}>
              <div className="playlist-image">
                <NavLink to={`/playlistVideo/${index}`}>
                  <img src={img} />
                </NavLink>
                <div
                  className="delete-playlist-icon"
                  onClick={() => handleDeletePlaylist(index)}
                >
                  <RxCross2 />
                </div>
              </div>

              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div> {playlists.length === 0 && <h3> Create a playlist</h3>}</div>

        <AiOutlinePlusCircle
          className="add-playlist-icon"
          onClick={() => setShowPlaylistModal(true)}
        />
      </div>

      {showPlaylistModal && (
        <div className="playlist-modal-on-playlistPage">
          <div className="playlist-modal-wrapper">
            <div className="modal">
              <PlaylistModal />

              <div className="modal-hide-button">
                <RxCross2 onClick={() => setShowPlaylistModal(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
