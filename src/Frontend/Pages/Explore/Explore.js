import "./Explore.css";

import { useContext, useState } from "react";
import { VideoContext } from "../../Context/VideoContext";
import { VideoCard } from "../../Components/VideoCard/VideoCard";

export const Explore = () => {
  const {
    state: { videos },
    searchVideo,
    searchTerm,
    setSearchTerm,
  } = useContext(VideoContext);

  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    searchVideo();
  };

  return (
    <div className="explore">
      <h2> Explore </h2>

      <div className="search">
        <label>
          <input
            type="text"
            placeholder="Search Video By Title"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </label>
      </div>

      <div className="explore-wrapper">
        {videos.map((video) => (
          <VideoCard {...video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
