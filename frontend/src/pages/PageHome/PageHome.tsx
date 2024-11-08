import "./PageHome.css";
import { Outlet } from "react-router-dom";

const PageHome = () => {
  return (
    <div className="page-home-container">
      <div className="playlists">

      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default PageHome;
