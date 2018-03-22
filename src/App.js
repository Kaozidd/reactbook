import React, { Component } from 'react';
import Post from './components/Post';
import WritePost from './components/WritePost';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div className='container'>
    		<Header />
    		<WritePost />
    		<Post />
    	</div>
    )
  }
}

export default App;
