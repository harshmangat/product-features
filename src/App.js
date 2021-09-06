import React from 'react';
import { Fragment } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Post from './components/main/Post';


function App() {
  return (
   <Fragment>
     <Header/>
     <Form />
     <Post />
     <Post />
     <Post />
   </Fragment>
  )
  }
export default App;
