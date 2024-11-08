import './TrackRow.css';
import { Card, CardBody } from "@nextui-org/card";

interface TrackRowProps {
  id: number;
  track_img: string;
  track_name: string;
  artist_name: string;
  album_name: string;
}

const TrackRow = (track: TrackRowProps) => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="track-row">
            <img className='track-img' src={ track.track_img } alt="track image"/>
            <div className='track-row-body'>
              <div>{ track.artist_name }</div>
              -
              <div>{ track.track_name }</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TrackRow;