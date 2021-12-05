import { useRef, useState, useEffect, useCallback } from "react";

const DrumPad = ({ keyText, audioSrc, displayLabel, setDisplay, power, volume }) => {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const play = useCallback(() => {
    if (!power) return;

    const audioPlayer = audioRef.current;
    audioPlayer.currentTime = 0;
    audioPlayer.play();

    setDisplay(displayLabel);
    setActive((prev) => !prev);

    setTimeout(() => {
      setDisplay("ON");
      setActive((prev) => !prev);
    }, 1000);
  }, [displayLabel, power, setDisplay]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === keyText.toLowerCase()) {
        play();
      }
    },
    [keyText, play],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [power, handleKeyDown]);

  return (
    <kbd className={`drum-pad ${active ? "active" : ""}`} onClick={play} id={displayLabel}>
      {keyText}
      <audio src={audioSrc} ref={audioRef} id={keyText} class="clip" />
    </kbd>
  );
};

export default DrumPad;
