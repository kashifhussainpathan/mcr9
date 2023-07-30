import { createContext, useReducer, useState, useEffect } from "react";
import { videoReducer } from "../Reducer/VideoReducer";
import { categories } from "../Utils/Categories";
import { videos } from "../Utils/Videos";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const initialState = {
    categories: categories,
    videos: videos,
    watchLater: [],
    noteValue: "",
    playlists: [
      {
        title: "my playlist",
        description: "",
        img: "https://picsum.photos/300/174",
        videos: [],
      },
    ],
  };

  const [playlistInputs, setplaylistInputs] = useState({
    title: "",
    description: "",
    img: "https://picsum.photos/300/174",
    videos: [],
  });

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [state, dispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    const storedState = localStorage.getItem("videoAppState");
    if (storedState) {
      dispatch({ type: "LOAD-STATE", payload: JSON.parse(storedState) });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("videoAppState", JSON.stringify(state));
    }
  }, [state]);

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

  const handleAddNoteClick = (videoId) => {
    const videoToUpdate = state?.videos?.find((video) => video._id === videoId);

    if (videoToUpdate) {
      const newNote = {
        id: Date.now().toString(),
        text: state.noteValue,
      };

      // create notes array in video obj
      if (!videoToUpdate.hasOwnProperty("notes")) {
        videoToUpdate.notes = [];
      }

      // Update the 'notes' array with note
      const updatedVideo = {
        ...videoToUpdate,
        notes: [...videoToUpdate.notes, newNote],
      };

      // Find the index of the video in the videos array
      const videoIndex = state.videos.findIndex(
        (video) => video._id === videoId
      );

      // Update the videos array with the updated video
      const updatedVideos = [...state.videos];
      updatedVideos[videoIndex] = updatedVideo;

      dispatch({ type: "UPDATE_VIDEO_WITH_NOTE", payload: updatedVideos });

      dispatch({ type: "NOTE-VALUE", payload: "" });
    }
  };
  const handleCreateNewPlaylist = () => {
    if (playlistInputs.title !== "" || playlistInputs.description !== "") {
      dispatch({ type: "CREATE-PLAYLIST", payload: playlistInputs });
      setplaylistInputs({
        ...playlistInputs,
        title: "",
        description: "",
        img: "https://picsum.photos/300/174",
      });
    }
  };

  const handleDeletePlaylist = (indexToRemove) => {
    const updatedPlaylist = state.playlists.filter(
      (item, index) => index !== indexToRemove
    );

    dispatch({ type: "DELETE-PLAYLIST", payload: updatedPlaylist });
  };

  const handleAddToPlaylist = (video, indexToMatch) => {
    const targetPlaylist = state?.playlists[indexToMatch];

    const isVideoAlreadyInPlaylist = targetPlaylist?.videos?.some(
      (playlistVideo) => playlistVideo?._id === video?._id
    );

    if (!isVideoAlreadyInPlaylist) {
      const updatedPlaylist = state.playlists.map((playlist, index) =>
        index === indexToMatch
          ? { ...playlist, videos: [...playlist.videos, video] }
          : playlist
      );

      dispatch({ type: "UPDATE-PLAYLIST", payload: updatedPlaylist });
    } else {
      alert("Video already exists in the playlist.");
    }
  };

  const value = {
    state,
    dispatch,
    addToWatchLater,
    removeFromWatchLater,
    searchVideo,
    handleAddNoteClick,
    playlistInputs,
    setplaylistInputs,
    handleCreateNewPlaylist,
    handleAddToPlaylist,
    handleDeletePlaylist,
    showPlaylistModal,
    setShowPlaylistModal,
  };

  return (
    <>
      <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
    </>
  );
};
