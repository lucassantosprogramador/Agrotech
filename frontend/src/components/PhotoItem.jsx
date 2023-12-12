import "./PhotoItem.css";
import userImg from "../assets/do-utilizador.png"

import { uploads } from "../utils/config";

import { Link } from "react-router-dom";

const PhotoItem = ({ photo }) => {
  return (
    <div className="photo-item">
      <p className="photo-author">
        <Link to={`/users/${photo.userId}`}><img className="userImg" src={userImg} alt="oi"/>{photo.userName}</Link>
      </p>
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
    </div>
  );
};

export default PhotoItem;
