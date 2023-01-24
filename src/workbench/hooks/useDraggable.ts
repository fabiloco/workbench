import { RefObject, useEffect, useState } from 'react';

import { Position } from '../store';

export const useDraggable = (
  containerRef: RefObject<HTMLDivElement>,
  initPosition: Position,
  mousePosition: Position
) => {
  const [dragging, setDragging] = useState(false);
  const [{ x, y }, setPosition] = useState<Position>({
    x: initPosition.x,
    y: initPosition.y,
  });

  const [{ dx, dy }, setDPosition] = useState({ dx: 0, dy: 0 });

  const onDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setDPosition({
      dx: event.nativeEvent.offsetX,
      dy: event.nativeEvent.offsetY,
    });
  };

  const onDragEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (!dragging) return;

    console.log(x);

    if (x < 0 || x > window.innerWidth) {
      setPosition((prevState) => {
        return {
          ...prevState,
          y: mousePosition.y - containerRef.current!.offsetTop - dy,
        };
      });
    } else if (y < 0 || y > window.innerHeight) {
      setPosition((prevState) => {
        return {
          ...prevState,
          x: mousePosition.x - containerRef.current!.offsetLeft - dx,
        };
      });

    } else {
      setPosition((prevState) => {
        return {
          ...prevState,
          x: mousePosition.x - containerRef.current!.offsetLeft - dx,
          y: mousePosition.y - containerRef.current!.offsetTop - dy,
        };
      });
    }
  }, [mousePosition, dx, dy]);

  return {
    onDragStart,
    onDragEnd,

    x,
    y,
  };
};
