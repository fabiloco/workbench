import { FC, useEffect } from 'react';

import { useDraggable } from '../../hooks';
import { Position, useTaskActions } from '../../store';

import styles from './styles/icon.module.css';

interface IconProps {
  taskId: number;
  name: string;
  iconUrl: string;
  position: Position;
  mousePosition: Position;
}

export const Icon: FC<IconProps> = ({
  taskId,
  name,
  iconUrl,
  position,
  mousePosition,
}) => {
  const { toggleTask, onIconPositionChange } = useTaskActions();

  const { x, y, onDragEnd, onDragStart, draggableRef } = useDraggable(
    position,
    mousePosition,
  );

  useEffect(() => {
    onIconPositionChange({x, y}, taskId);
  }, [x, y]);

  return (
    <div
      ref={draggableRef}
      tabIndex={0}
      className={styles.container}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onDoubleClick={() => toggleTask(taskId)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className={styles.icon__dragger} />
      <img className={styles.icon__img} src={iconUrl} />
      <p>{name}</p>
    </div>
  );
};
