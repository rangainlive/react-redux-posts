import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log("Loading", loading);
  console.log("hasErrors", hasErrors);
  console.log("Post:", posts);

  return (
    <section>
      <h1>Posts</h1>
      {posts && posts.map((post) => <Post key={post.id} post={post} excerpt />)}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
