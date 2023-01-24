import { FC } from 'react';

import { useDraggable } from '../../hooks';
import { Position } from '../../store';

import styles from './styles/icon.module.css';

interface IconProps {
  taskId: number;
  name: string;
  iconUrl: string;
  initPosition: Position;
  mousePosition: Position;
  onDoubleClick: (taskId: number) => void;
}

export const Icon: FC<IconProps> = ({
  taskId,
  name,
  iconUrl,
  initPosition,
  mousePosition,
  onDoubleClick,
}) => {
  const { x, y, onDragEnd, onDragStart, draggableRef } = useDraggable(
    initPosition,
    mousePosition
  );

  return (
    <div
      ref={draggableRef}
      tabIndex={0}
      className={styles.container}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onDoubleClick={() => onDoubleClick(taskId)}
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
