import { useEffect, useState } from 'react';
import yesImage from './assets/yes.gif';
import soundFile from "./assets/DAVID BOWIE – Valentine's Day.mp3"
import img1 from './assets/img1.jpg'
import img4 from './assets/img4.jpg'

const Yes = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      playSound();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const yesStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, 
  };

  return isVisible ? (
    <div style={yesStyle}>
      <img
        src={yesImage}
        alt="Yes GIF"
        style={{ width: '100%', height: '100%', opacity: 1, objectFit: 'fill' }}
      />
    </div>
  ) 
  : 
  <>
    <div className="yes-page">
      <div className="image1" style={{
        width: '50vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        <img src={img1} />
      </div>
      <div className="image2" style={{
        width: '50vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        right: 0
      }}>
        <img src={img4}/>
      </div>
    </div>
    <div style={{
      zIndex: 999,
      color: 'hsla(260,11%,95%,1)',
      fontSize: '4vw',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(250 148 166 / 67%)',
      textAlign: 'center'
    }}>
      <p>Ти мій янгол!<br/>Я тебе дуже кохаю!<br/>Я щасливий, що ти моя валентинка!</p>
    </div>
  </>;
};

export default Yes;
