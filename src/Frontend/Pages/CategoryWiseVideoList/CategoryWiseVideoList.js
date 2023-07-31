import "./CategoryWiseVideoList.css";

import { useContext } from "react";
import { useParams } from "react-router";
import { VideoContext } from "../../Context/VideoContext";

import { VideoCard } from "../../Components/VideoCard/VideoCard";

export const CategoryWiseVideoList = () => {
  const {
    state: { videos },
  } = useContext(VideoContext);
  const { category } = useParams();

  const categoryWiseVideoList = videos.filter(
    (video) => video.category == category
  );

  return (
    <div className="videosCategory">
      <h2> {category} </h2>

      <div className="videos-wrapper">
        {categoryWiseVideoList?.map((video) => (
          <VideoCard {...video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
