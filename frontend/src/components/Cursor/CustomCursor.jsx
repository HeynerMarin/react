import React, { useEffect, useState } from 'react';
import './CustomCursor.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const addHoverEvents = () => {
      document.querySelectorAll('a, button, .btn-primary, .btn-outline').forEach((el) => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addHoverEvents();
    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className={`cursor ${hovering ? 'hovering' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
