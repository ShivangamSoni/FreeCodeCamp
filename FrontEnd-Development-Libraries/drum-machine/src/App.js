import { useState } from "react";
import Control from "./Components/Control";
import DrumPad from "./Components/DrumPad";
import Display from "./Components/Display";

const DrumPads = [
  {
    keyCode: 81,
    key: "Q",
    label: "Heater-1",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    label: "Heater-2",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    label: "Heater-3",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    label: "Heater-4",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    label: "Clap",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    label: "Open-HH",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    label: "Kick-n'-Hat",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    label: "Kick",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    label: "Closed-HH",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const App = () => {
  const [displayText, setDisplayText] = useState("OFF");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);

  return (
    <main id="drum-machine">
      <Control power={power} setDisplay={setDisplayText} setPower={setPower} volume={volume} setVolume={setVolume} />

      <div className="drum-container">
        {DrumPads.map((drumPad) => (
          <DrumPad key={drumPad.keyCode} keyText={drumPad.key} audioSrc={drumPad.audio} displayLabel={drumPad.label} setDisplay={setDisplayText} power={power} volume={volume} />
        ))}
      </div>

      <Display text={displayText} />
    </main>
  );
};

export default App;
