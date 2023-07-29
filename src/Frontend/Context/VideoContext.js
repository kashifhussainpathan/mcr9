import { createContext, useReducer } from "react";
import { videoReducer } from "../Reducer/VideoReducer";
import { categories } from "../Utils/Categories";
import { videos } from "../Utils/Videos";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const initialState = {
    categories: categories,
    videos: videos,
    watchLater: [],
    notes: [],
    noteValue: "",
  };

  const [state, dispatch] = useReducer(videoReducer, initialState);

  const addToWatchLater = (videoId) => {
    state.videos.map((video) => {
      if (video._id === videoId) {
        dispatch({ type: "ADD-TO-WATCHLATER", payload: video });
      }
    });
  };

  const removeFromWatchLater = (videoId) => {
    const updateWatchLater = state.watchLater.filter(
      (video) => video._id !== videoId
    );
    dispatch({ type: "REMOVE-FROM-WATCHLATER", payload: updateWatchLater });
  };

  const searchVideo = (searchTerm) => {
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch({ type: "SEARCH-VIDEO", payload: filteredVideos });
  };

  const handleAddNoteClick = () => {
    dispatch({ type: "NOTE", payload: state.noteValue });
    state.noteValue = "";
  };

  const value = {
    state,
    dispatch,
    addToWatchLater,
    removeFromWatchLater,
    searchVideo,
    handleAddNoteClick,
  };

  return (
    <>
      <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
    </>
  );
};
