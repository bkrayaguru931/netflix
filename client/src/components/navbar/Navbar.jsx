import { ArrowDropDown, NotificationsOutlined, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Children</span>
          <NotificationsOutlined className="icon" />
          <img
            src="https://images.pexels.com/photos/15637514/pexels-photo-15637514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Manage Profiles</span>
              <span>Transfer Profile</span>
              <span>Account</span>
              <span>Help Centre</span>
              <span>Sign out of Netflix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;