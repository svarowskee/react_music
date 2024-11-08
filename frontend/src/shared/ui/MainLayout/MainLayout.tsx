import './MainLayout.css';
import { ReactNode } from "react";
import MainHeader from "../../../widgets/main-header/MainHeader";
import MainFooter from "../../../widgets/main-footer/MainFooter";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout-container">
      <MainHeader />
      <div className="container">
        { children }
      </div>
      <div className="footer">
        <MainFooter></MainFooter>
      </div>
    </div>
  );
};

export default MainLayout;
