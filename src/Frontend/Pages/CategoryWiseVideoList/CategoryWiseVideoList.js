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
          // <div key={_id} className="video-wrapper">
          //   <div className="video-image">
          //     <img src={thumbnail} alt={title} />
          //     <span onClick={() => addToWatchList(_id)}>
          //       {" "}
          //       <MdOutlineWatchLater />
          //     </span>
          //   </div>
          //   <div className="video-details">
          //     <div className="dp-and-title">
          //       <img src="https://picsum.photos/40/40" alt="dp" />
          //       <h4> {title}</h4>
          //     </div>

          //     <div className="views-creator">
          //       {views} | {creator}
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};
