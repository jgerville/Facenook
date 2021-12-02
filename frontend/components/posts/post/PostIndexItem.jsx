import React, { useState } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostButtons from "./PostButtons";
import LikeAndCommentCounts from "./LikeAndCommentCounts";
import ComposeCommentContainer from "./compose_comment_container";
import CommentIndexContainer from "./comment_index_container";

const PostIndexItem = ({ post, user }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => setShowComments(prev => !prev);
  const revealComments = () => setShowComments(true);

  return (
    <div className="post-index-item">
      <PostHeader post={post} user={user} />
      <PostContent body={post.body} />
      <LikeAndCommentCounts post={post} toggleComments={toggleComments} />
      <PostButtons toggleComments={toggleComments} />
      {showComments && (
        <>
          <CommentIndexContainer parentPost={post} postIds={post.childPosts} />
          <ComposeCommentContainer parentPost={post} showComments={revealComments} />
        </>
      )}
    </div>
  );
};

PostIndexItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default PostIndexItem;
