import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ChatSidebar from './components/ChatSidebar';
import "./App.css"
import Tabs from './components/Tabs/Tabs';
import CreatePost from './components/NewsFeed/CreatePost';
const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <div className="main-content">
          <Tabs/>
          <CreatePost/>
        </div>
        <ChatSidebar />
      </div>
    </div>
  );
};

export default HomePage;
