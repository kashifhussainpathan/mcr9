import { useContext } from "react";
import { VideoContext } from "../Context/VideoContext";

export const AddNote = ({ video }) => {
  const {
    state: { noteValue },
    dispatch,
    handleAddNoteClick,
  } = useContext(VideoContext);

  const handleInputChange = (e) => {
    dispatch({ type: "NOTE-VALUE", payload: e.target.value });
  };

  const handleAddNoteClickForVideo = (video) => {
    handleAddNoteClick(video._id);
  };

  return (
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
        <button onClick={() => handleAddNoteClickForVideo(video)}>
          {" "}
          Add Note{" "}
        </button>{" "}
      </div>
    </div>
  );
};
