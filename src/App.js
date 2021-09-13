import React, { useReducer } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Post from "./components/main/Post";

const reducer = (state, action) => {
  if (action.type === "add") {
    return { [action.data.id]: action.data, ...state };
  } else if (action.type === "upvote") {
    const post = state[action.postId];
    post.votes += 1;
    return { ...state, [action.postId]: post };
  } else if (action.type === "downvote") {
    const post = state[action.postId];
    post.votes -= 1;
    return { ...state, [action.postId]: post };
  } else {
    throw new Error("Error action type");
  }
  


  // switch (action.type) {
  //   case 'add': {
  //  return { [action.data.id]: action.data, ...state };
  // }
  //  case 'upvote': {
  //  const post = state[action.postId];
  //   post.votes += 1;
  // return { ...state, [action.postId]: post };
  //  }
  // case 'downvote': {
  //    const post = state[action.postId];
  //    post.votes -= 1;
  //    return { ...state, [action.postId]: post };
  //  }
  //  default:
  //    throw new Error('Unknown action type');
  // }
  
};

function App(props) {
  const [data, dispatch] = useReducer(reducer, {});

  const addNewPostHandler = (postData) => {
    dispatch({ type: "add", data: postData });
  };

  const posts = Object.values(data);

  return (
    <>
      <ul className="box-area">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="form-box">
        <Header />
        <Form onNewPost={addNewPostHandler} />
        {posts.length > 0 &&
          posts
            .sort((prev, next) => (prev.votes > next.votes ? -1 : 1))
            .map((post) => (
              <Post key={post.id} data={post} dispatch={dispatch} />
            ))}
      </div>
    </>
  );
}
export default App;
