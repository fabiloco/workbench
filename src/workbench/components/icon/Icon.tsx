import { FC, RefObject, useEffect } from 'react';

import { useDraggable } from '../../hooks';
import { Position } from '../../store';

import styles from './styles/icon.module.css';

interface IconProps {
  taskId: number;
  name: string;
  iconUrl: string;
  containerRef: RefObject<HTMLDivElement>;
  initPosition: Position;
  mousePosition: Position;
  onDoubleClick: (taskId: number) => void;
}

export const Icon: FC<IconProps> = ({
  taskId,
  name,
  iconUrl,
  containerRef,
  initPosition,
  mousePosition,
  onDoubleClick,
}) => {
  const { x, y, onDragEnd, onDragStart } = useDraggable(
    containerRef,
    initPosition,
    mousePosition
  );


  return (
    <div
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
