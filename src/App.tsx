import { useState } from 'react';
import './App.css'
import errorIamge from './assets/error.jpg';
import clickSound from './assets/error-call-to-attention-129258.mp3';
import clickSoundYes from './assets/congratulations-deep-voice-172193.mp3';
import Yes from './Yes';
import { useNavigate } from 'react-router-dom';

interface Position {
  top?: number;
  left?: number;
}

function App() {
  const [position, setPosition] = useState<Position | null>(null);
  const [opacity, setOpacity] = useState<number>(0)

  const navigate = useNavigate();

  const moveButton = () => {
    const newPosition: Position = {
      top: Math.random() * (20), 
      left: Math.random() * (30),
    };
    const audio = new Audio(clickSound);
    audio.play();
    setPosition(newPosition);
    setOpacity((prev) => prev + 0.25)
  };

  const yesButtonClick = (nav) => {
    const audio = new Audio(clickSoundYes);
    audio.play();
    navigate(nav)
  };

  const buttonStyle = position
    ? { position: 'absolute', top: `${position.top}vh`, left: `${position.left}vw` }
    : {};

    const errorStyle = {
      position: 'absolute',
      backgroundImage: `url(${errorIamge})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      zIndex: 2,
      opacity: opacity,
    };
  return (
    <>
      <div style={errorStyle} /> 
      <div className="wrapper">
        <div className="content">
          <div className="text-content">
            <div className="text">Нікася,</div>   
            <div className="text">ти будеш</div>
            <div className="text">моєю валентинкою?</div>
          </div>
          <div className="buttons">
            <button 
              className="button no" 
              style={opacity === 1 ? {display: 'none'} : buttonStyle}
              onClick={moveButton}>Ні</button>
            <button className="button yes" onClick={() => yesButtonClick('/yes')}>Так</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
