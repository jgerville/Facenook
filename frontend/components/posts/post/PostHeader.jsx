import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../graphics/UserCard";
import EditAndDeleteButtonsContainerPost from "./edit_and_delete_buttons_container_post";

const PostHeader = ({ post, user }) => {
  return (
    <div className="post-header">
      <UserCard user={user} time={post.createdAt} editedAt={post.updatedAt} />
      <EditAndDeleteButtonsContainerPost comment={post} />
      {/* {modal === "edit-post" && (
        <ComposePost 
          user={user} 
          wallOwner={wallOwner} 
          close={closeModal} 
        />
      )} */}
    </div>
  );
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default PostHeader;