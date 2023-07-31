import "./PlaylistVideo.css";

import { useContext } from "react";
import { useParams } from "react-router";

import { VideoContext } from "../../Context/VideoContext";
import { VideoCard } from "../../Components/VideoCard/VideoCard";

import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const PlaylistVideo = () => {
  const { playlistIndex } = useParams();

  const {
    state: { playlists },
  } = useContext(VideoContext);

  const playlist = playlists?.find(
    (playlist, index) => +index === +playlistIndex
  );

  return (
    <div className="playlist-video">
      <div className="playlist-video-heading">
        <NavLink to="/playlist">
          <BiArrowBack />
        </NavLink>

        <h2>{playlist.title}</h2>
      </div>

      <div className="playlist-video-wrapper">
        {playlist?.videos?.map((video) => (
          <VideoCard {...video} />
        ))}
      </div>
    </div>
  );
};
