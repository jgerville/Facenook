import React, { useState } from "react";
import PropTypes from "prop-types";

const UploadImage = ({ avatarUser, modal, upload, openModal, closeModal, photoType }) => {
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoURL(fileReader.result)
      setFile(file);
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handleOpen = (e) => {
    openModal(photoType);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`user[${photoType}]`, file)
    debugger;
    const user = { data: formData, id: avatarUser.id };
    upload(user).then(closeModal());
  };

  const preview = photoURL ? <img className="preview" src={photoURL} /> : null;

  return (
    <>
      <i className="fas fa-camera" onClick={handleOpen} />
      {(modal === photoType) && (
        <div className="outer-modal">
          <form className="inner-modal" onSubmit={handleSubmit}>
            <input type="file" onChange={handleUpload} />
            {preview}
            <div className="buttons">
              <a onClick={closeModal}>Cancel</a>
              <input type="submit" value="Save" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

UploadImage.propTypes = {
  avatarUser: PropTypes.object.isRequired,
  modal: PropTypes.string,
  upload: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UploadImage;