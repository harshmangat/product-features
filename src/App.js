import React, { useReducer, useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Post from "./components/main/Post";
import Notify from "./components/main/notification/Notify"

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
  
};

function App(props) {
  const [data, dispatch] = useReducer(reducer, {});
  const [confirmationIsShown, setConfirmation] = useState(false);

  const addNewPostHandler = (postData) => {
    dispatch({ type: "add", data: postData });
  };

  const posts = Object.values(data);

const showConfirmHandler = () =>{
  setConfirmation(true);
}

const hideConfirmHandler = ()=>{
  setConfirmation(false);
}


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
      {confirmationIsShown && <Notify onClose={hideConfirmHandler}/>}
        <Header />
        <Form onNewPost={addNewPostHandler} />
        {posts.length > 0 &&
          posts
            .sort((prev, next) => (prev.votes > next.votes ? -1 : 1))
            .map((post) => (
              <Post key={post.id} data={post} dispatch={dispatch} onShowConfirm={showConfirmHandler}/>
            ))}
      </div>
    </>
  );
}
export default App;
