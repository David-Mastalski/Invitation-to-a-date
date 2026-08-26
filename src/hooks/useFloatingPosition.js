import { useRef, useState } from "react";

export function useFloatingPosition(maxTauntsLength) {
  const [position, setPosition] = useState(null);
  const [tauntIndex, setTauntIndex] = useState(0);
  const containerRef = useRef(null);

  function moveButton() {
    let btnWidth = 140;
    let btnHeight = 45;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      btnWidth = rect.width;
      btnHeight = rect.height;
    }

    const padding = 50;
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(60, Math.floor(Math.random() * maxY));

    setPosition({
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
    setTauntIndex((prevIndex) => Math.min(prevIndex + 1, maxTauntsLength - 1));
  }

  return { position, tauntIndex, containerRef, moveButton };
}
