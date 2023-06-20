const ReelsTitle = ({ activeTab, handleTabClick }) => {
    return (
        <div
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
        >
            <i class="fas fa-play-circle"></i>
            <strong> Reels</strong>
            
        </div>
    );
};

export default ReelsTitle;
