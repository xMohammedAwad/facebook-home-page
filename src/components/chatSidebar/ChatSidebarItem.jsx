const ChatSidebarItem = ({img,title,haveStory}) => {
    return (
        <div className="chat-sidebar-item sidebar-item">
            <img className={haveStory ? "avatar have-story": "avatar"} src={`/assets/${img}`} alt="" />
            <strong className="sidebar-item-title">{title}</strong>
        </div>
    );
};

export default ChatSidebarItem;
