import { NavLink } from "react-router-dom";
import "./Home.css";
import { useContext } from "react";
import { VideoContext } from "../../Context/VideoContext";

export const Home = () => {
  const {
    state: { categories },
  } = useContext(VideoContext);

  return (
    <>
      <div>
        <h2>Categories</h2>

        <ul className="categoryContainer">
          {categories?.map((video) => {
            const { _id, thumbnail, category } = video;
            return (
              <li key={_id} className="categorySpecial">
                <NavLink to={`/catVideoList/${category} `} className="navlink">
                  <img src={thumbnail} alt="thumbnail" />
                  <h3>{category}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
