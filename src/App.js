import React from "react";
import { Fragment } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Post from "./components/main/Post";

function App() {
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
        <Form />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
export default App;