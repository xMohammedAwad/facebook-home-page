import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
import Stories from './components/Stories';
import Reels from './components/Reels';
import ChatSidebar from './components/ChatSidebar';
import "./App.css"
const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <Stories />
          <Reels />
          <NewsFeed />
        </div>
        <ChatSidebar />
      </div>
    </div>
  );
};

export default HomePage;
