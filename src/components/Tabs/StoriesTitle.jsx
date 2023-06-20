import React from 'react';

const StoriesTitle = ({ activeTab, handleTabClick }) => {
    return (
        <div
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)}
            
        >
            <i class="fas fa-book-open  "></i>
            <strong> Stories</strong> 
        </div>
    );
};

export default StoriesTitle;
