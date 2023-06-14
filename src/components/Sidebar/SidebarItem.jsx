const SidebarItem = ({ id, icon, img, title, setActiveItem, activeItem }) => {
  const handleSidebarItemClick = () => {
    setActiveItem(id);
  };

  return (
    <a
      href="#"
      className={`sidebar-item ${activeItem === id ? 'active' : ''}`}
      onClick={handleSidebarItemClick}
    >
      {icon ? (
        <i className={`fas ${icon} avatar sidebar-item-icon`}></i>
      ) : (
        <img className="avatar" src={`/assets/${img}`} alt="" />
      )}
      <strong className="sidebar-item-title">{title}</strong>
    </a>
  );
};

export default SidebarItem;
