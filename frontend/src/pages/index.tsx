import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./PageHome/PageHome";
import MainLayout from "../shared/ui/MainLayout/MainLayout";
import MainTrackList from "../widgets/main-tracklist/MainTrackList";

const Routing = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' Component={ PageHome }>
            <Route index Component={ MainTrackList } />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
};

export default Routing;
