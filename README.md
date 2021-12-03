# Facenook

  

Facenook is -- brace yourselves --  a Facebook clone! It attempts to mimic Facebook's core functionality and user interface.

## Live Link
https://face-nook.herokuapp.com/

## Technologies Employed

### React.js
Facebook's entire frontend is written in React. Every component is functional, using hooks rather than classes to deal with component state.

### PropTypes
Each React component that may have props is checked using PropTypes.

### Redux
Redux is utilized in order to manage Facenook's application state. The state is carefully organized and aims to be as flat as possible.

### Amazon Web Services
Facenook stores all images on the cloud using AWS, rather than inside its own asset pipeline.

### Rails
Facenook's entire backend API is handled by Rails. The majority of the API endpoints are RESTful, along with some custom routes for different types of searches.

### PostgreSQL
The backend uses PostgreSQL to store, query, and filter data.

### Babel and Webpack
Both build tools are used with custom config files.

### HTML5 and CSS3
Semantic HTML tags are preferred and the layout uses native CSS tools like Flexbox and Grid to be responsive.

### Git and Github
Naturally, Git was used in development to maintain a stable production branch while developing in other branches.

## Notable features

### Posts and comments
Facebook's UI for everything related to posting is very slick. That made it both challenging and satisfying to mimic. Modals and drop-downs everywhere!

### Profile Editing
Editing single parts of a user's profile is another feature that Facebook implements in a stylish way. Rather than pre-filling a form with all user types of data for the user to edit, users can click on buttons for each profile category to replace the buttons with single-input components. This was another fulfilling feature to implement in Facenook.

## The Anatomy of a Post
Here is a snippet that exemplifies the coding style used in Facenook. Components are given meaningful names and should only do one thing each.
```javascript
const  PostIndexItem  = ({ post, user }) => {
const [showComments, setShowComments] =  useState(false);
const  toggleComments  = () =>  setShowComments(prev  =>  !prev);
const  revealComments  = () =>  setShowComments(true);

  return (
    <div  className="post-index-item">
      <PostHeader  post={post}  user={user}  />
      <PostContent  body={post.body}  />
      <LikeAndCommentCounts  post={post}  toggleComments={toggleComments}  />
      <PostButtons  toggleComments={toggleComments}  />
      {showComments && (
	<>
          <CommentIndexContainer  parentPost={post}  />
          <ComposeCommentContainer  
            parentPost={post}  
            showComments={revealComments}  
          />
	</>
      )}
    </div>
  );
};
```

## Future directions

* Users should be able to like a post or comment.
* Users should be able to attach images to their posts.
