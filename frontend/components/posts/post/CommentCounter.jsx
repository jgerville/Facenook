import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CommentCounter = ({ post, posts, toggle }) => {
  const childCount = () => {
    const numChildren = post.childPosts.length;

    if (numChildren === 0) {
      return "0 comments";
    } else if (numChildren === 1) {
      return "1 comment";
    } else {
      let totalComments = numChildren;
      for (let i = 0; i < numChildren; i++) {
        let grandChildrenArray = posts[post.childPosts[i]].childPosts;
        console.log(post.body, grandChildrenArray)
        totalComments += grandChildrenArray.length;
      }
      return `${totalComments} comments`
    }
  }

  return (
    <div className="comment-counts" onClick={toggle}>
      <span>{childCount()}</span>
    </div>
  );
};

const mapStateToProps = ({ entities: { posts } }) => ({
  posts,
})

CommentCounter.propTypes = {
  post: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(CommentCounter);