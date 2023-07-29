import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineWatchLater,
  MdOutlinePlaylistAddCircle,
} from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <NavLink to="/" className="sidebarOptions">
          <AiOutlineHome />
          <span>Home</span>
        </NavLink>

        <NavLink to="/explore" className="sidebarOptions">
          <MdOutlineExplore />
          <span>Explore</span>
        </NavLink>

        <NavLink to="/playlists" className="sidebarOptions">
          <MdOutlinePlaylistAddCircle />
          <span>Playlists</span>
        </NavLink>

        <NavLink to="/watchlater" className="sidebarOptions">
          <MdOutlineWatchLater />
          <span>Watch Later</span>
        </NavLink>
      </div>
    </div>
  );
};
