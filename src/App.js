import React, { useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Post from "./components/main/Post";

function App(props) {
  const [data, setData] = useState([]);

  const addNewPostHandler = (postData) => {
    setData((prevData) => {
      return [postData, ...prevData];
    });
  };
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
        {data.length > 0 &&
          data.map((post) => <Post key={post.id} title={post.title} />)}
      </div>
    </>
  );
}
export default App;
