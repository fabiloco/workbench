import { FC, useEffect } from 'react';

import { useDraggable } from '../../hooks';

import { Position, Size, useTaskActions } from '../../store';

import styles from './styles/window.module.css';

interface WindowProps {
  taskId: number;
  name: string;
  initPosition?: Position;
  size?: Size;
  mousePosition: Position;
  onClose: (taskId: number) => void;
}

const getCenteredPosition = (size: Size): Position => {
  return {
    x: (window.innerWidth - size.width) / 2,
    y: (window.innerHeight - size.height) / 2 ,
  };
};

export const Window: FC<WindowProps> = ({
  name,
  mousePosition,
  initPosition,
  onClose,
  taskId,
  size = { width: 400, height: 400 },
}) => {
  const { x, y, onDragEnd, onDragStart, draggableRef } = useDraggable(
    initPosition ? initPosition : getCenteredPosition(size),
    mousePosition
  );

  const { toggleTask, onIconPositionChange } = useTaskActions();

  // useEffect(() => {
  //   onIconPositionChange(initPosition, taskId);
  // }, [x, y]);

  return (
    <div
      ref={draggableRef}
      className={styles.container}
      style={{
        width: size.width,
        height: size.height,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className={styles.topbar__container}>
        <div
          className={styles.real__dragger}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
        />

        <div className={styles.topbar__title}>{name}</div>

        <div className={styles.topbar__dragger}>
          <div className={styles.topbar__dragger__bar} />
          <div className={styles.topbar__dragger__bar} />
        </div>

        <div className={styles.topbar__action}>
          <button
            className={styles.topbar__button}
            onClick={() => onClose(taskId)}
          >
            x
          </button>
        </div>
      </div>

      <div className={styles.window}></div>
    </div>
  );
};
