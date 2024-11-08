import './MainFooter.css';
import { Slider } from "@nextui-org/slider";

const MainFooter = () => {
  return (
    <footer className="footer-container">
      <div></div>
      <div className="main-controls">
        <div className="controls">
          <i className='bx bx-shuffle'></i>
          <i className='bx bx-skip-previous-circle'></i>
          <i className='bx bx-play-circle play-pause'></i>
          <i className='bx bx-skip-next-circle'></i>
          <i className='bx bx-repeat'></i>
        </div>
        <div className="progressbar">
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={ true }
            defaultValue={ 20 }
            className="max-w-md"
          />
        </div>
      </div>

      <div className="other-controls">
        <i className='bx bx-volume-full'></i>
        <Slider
          size="sm"
          step={ 5 }
          maxValue={ 100 }
          minValue={ 0 }
          aria-label="Volume"
          defaultValue={ 100 }
          className="max-w-md"
          color="foreground"
        />
      </div>
    </footer>
  );
};

export default MainFooter;