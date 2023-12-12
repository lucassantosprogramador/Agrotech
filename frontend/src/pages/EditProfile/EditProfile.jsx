import "./EditProfile.css";

import { uploads } from "../../utils/config";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile, updateProfile, resetMessage } from "../../slices/userSlice";

// Components
import Message from "../../components/Message";

const Profile = () => {
  const dispatch = useDispatch();

  const { user, message, error, loading } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // Load user data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // fill user form
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather user data from states
    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (bio) {
      userData.bio = bio;
    }

    if (password) {
      userData.password = password;
    }

    // build form data
    const formData = new FormData();

    const userFormData = Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key])
    );

    formData.append("user", userFormData);

    await dispatch(updateProfile(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const handleFile = (e) => {
    // image preview
    const image = e.target.files[0];

    setPreviewImage(image);

    // change image state
    setProfileImage(image);
  };

  return (
    <section className="container-profile" id="edit-profile">
      <div className="perfil">
        <h2>Edite seus dados</h2>
        <p className="subtitle-">Adicione uma imagem de Perfil</p>
        {(user.profileImage || previewImage) && (
          <img
            className="profile-image"
            src={
              previewImage
                ? URL.createObjectURL(previewImage)
                : `${uploads}/users/${user.profileImage}`
            }
            alt={user.name}
          />
        )}
      </div>
      <form className="form-profile" onSubmit={handleSubmit}>
        <input
        className="inputs-edit"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input className="inputs-edit" type="email" placeholder="E-mail" disabled value={email || ""} />
        <label>
          <input
          className="inputs-edit" type="file" onChange={handleFile} />
        </label>
        <label>
          <input
          className="inputs-edit"
            type="text"
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          />
        </label>
        <label>
          <input
          className="inputs-edit"
            type="password"
            placeholder="Digite sua nova senha..."
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </label>
        {!loading && (
          <input className="btn-profile" type="submit" value="Atualizar" />
        )}
        {loading && (
          <input
            className="btn-profile"
            type="submit"
            disabled
            value="Aguarde..."
          />
        )}
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </form>
    </section>
  );
};

export default Profile;
