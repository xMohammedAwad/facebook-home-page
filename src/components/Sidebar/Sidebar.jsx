import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import Footer from '../Footer';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleSetActiveItem = (itemId) => {
    setActiveItem(itemId);
  };

  const sidebarGroups = [
    {
      title: 'Main',
      items: [
        { title: 'Home', icon: 'fa-home', id: '1', img: null },
        { title: 'Profile', icon: null, id: '2', img: 'avatar.jpg' },
      ],
    },
    {
      title: 'Explore',
      items: [
        { title: 'Watch', img: 'watch.png', id: '3' },
        { title: 'Marketplace', img: 'store.png', id: '4' },
        { title: 'Gaming', img: 'game.png', id: '5' },
        { title: 'See all', icon: 'fa-th', id: '6' },
      ],
    },
    {
      title: 'Groups',
      items: [
        { title: 'Peeks', img: 'group-name.jpg', id: '7' },
        { title: 'Gaza Tech', img: 'group2.jpg', id: '8' },
        { title: 'See all groups', icon: 'fa-users', id: '9' },
      ],
    },
    {
      title: 'Shortcuts',
      items: [
        { title: 'See all shortcuts', icon: 'fa-link', id: '10' },
      ],
    },
  ];

  return (
    <div className="sidebar">
      {sidebarGroups.map((group, index) => (
        <div className="sidebar-group" key={index}>
          {group.items.map((item) => (
            <SidebarItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              img={item.img}
              id={item.id}
              setActiveItem={handleSetActiveItem}
              activeItem={activeItem}
            />
          ))}
        </div>
      ))}
      <div className="footer-wrapper">
        <Footer />
      </div>
      <div className='temp'></div>
    </div>
  );
};

export default Sidebar;
