import './MainTrackList.css';
import { tracks } from '../../data/tracks';
import TrackRow from "../../entities/ui/TrackRow/TrackRow";

const MainTrackList = () => {
  return (
    <div>
      {
        tracks.map((track) => <TrackRow {...track}></TrackRow>)
      }
    </div>
  );
};

export default MainTrackList;