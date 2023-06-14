import logo from "/assets/logo.png"
import avatar from "/assets/avatar.jpg"
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img className="logo" src={logo} alt="" />
      </a>
      <form>
        <div className="search-wrapper">
          <input className="search-input" placeholder="Search Facebook" type="text" />
        </div>
      </form>
      <ul className="user-menu">
        <li className="user-menu-item">
          <i class="fab fa-facebook-messenger icon "></i>
        </li>
        <li className="user-menu-item">
          <i class="fa fa-bell icon" aria-hidden="true"></i>
        </li>
        <li className="user-menu-item">
          <img className="icon" src={avatar} alt="" />
          <i className="fas fa-chevron-down"></i>

       </li>


      </ul>
    </header>
  );
};

export default Header;
