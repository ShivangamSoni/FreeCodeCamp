const Control = ({ power, setPower, setDisplay, volume, setVolume }) => {
  const togglePower = () => {
    setPower((prev) => !prev);

    const display = power ? "OFF" : "ON";
    setDisplay(display);
  };

  const adjustVolume = (e) => {
    const value = Number(e.target.value);
    setVolume(value);
    setDisplay(`Volume: ${Math.floor(value * 100)}%`);

    setTimeout(() => setDisplay("ON"), 1000);
  };

  return (
    <div className="controls">
      <label>
        Power
        <input type="checkbox" className="power" value={power} checked={power} onChange={togglePower} />
      </label>

      {power && (
        <label>
          Volume
          <input type="range" className="volume" min="0" max="1" step="0.01" value={volume} onChange={adjustVolume} />
        </label>
      )}
    </div>
  );
};

export default Control;
