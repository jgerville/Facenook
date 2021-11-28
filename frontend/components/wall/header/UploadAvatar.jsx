import React, { useState } from "react";
import PropTypes from "prop-types";

const UploadAvatar = ({ wallOwner }) => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[profpic]', file)
    formData.append('_method', 'PATCH')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleUpload} />
      </form>
    </div>
  );
};

UploadAvatar.propTypes = {
  wallOwner: PropTypes.object,
};

export default UploadAvatar;