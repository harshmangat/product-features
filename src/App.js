import React from "react";
import { Fragment } from "react";
import {useState} from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Post from "./components/main/Post";

function App() {
  const [featuresPost, setFeaturesPost]= useState([]);

  const addFeaturePostHandler = (newFeature)=>{
    setFeaturesPost((prevFeaturePost)=>{
      return [...prevFeaturePost,{feature: newFeature}]
    })
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
        <Header />
        <Form onAddNewPost={addFeaturePostHandler}/>
        <Post features={featuresPost}/>
        
      </div>
    </>
  );
}
export default App;