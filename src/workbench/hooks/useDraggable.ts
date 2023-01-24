import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { Position } from '../store';

export const useDraggable = (
  initPosition: Position,
  mousePosition: Position,
) => {
  const draggableRef = useRef<HTMLElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const [dragging, setDragging] = useState(false);

  const [x, setX] = useState(initPosition.x);
  const [y, setY] = useState(initPosition.y);

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
    let animationFrameId: number;

    const updatePosition = () => {
      if (!dragging) return;

      const newY = mousePosition.y - draggableRef.current!.offsetTop - dy;
      const newX = mousePosition.x - draggableRef.current!.offsetLeft - dx;

      setY(
        Math.min(
          window.innerHeight - draggableRef.current!.clientHeight,
          Math.max(0, newY)
        )
      );
      setX(
        Math.min(
          window.innerWidth - draggableRef.current!.clientWidth,
          Math.max(0, newX)
        )
      );

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition, dx, dy]);

  return {
    onDragStart,
    onDragEnd,

    draggableRef,
    x,
    y,
  };
};
