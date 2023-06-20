import { useState } from 'react';

import StoriesTitle from './StoriesTitle';
import ReelsTitle from './ReelsTitle';
import ReelsContent from './ReelsContent';
import StoriesContent from './StoriesContent';

import "./Tabs.css"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs" >
            <div className="tab-list">
                <StoriesTitle activeTab={activeTab} handleTabClick={handleTabClick} />
                <ReelsTitle activeTab={activeTab} handleTabClick={handleTabClick} />
            </div>

            <div className="tab-content">
                {activeTab === 0 ? (
                    <StoriesContent />
                ) : (
                    <ReelsContent />
                )}
            </div>
        </div>
    );
};

export default Tabs;
