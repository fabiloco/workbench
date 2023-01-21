import { Fragment, useRef, useState } from 'react';
import { useTaskActions, useTasks } from '../../store';

import { Icon } from '../icon/Icon';
import { Window } from '../window/Window';

import styles from './styles/desktop.module.css';

export interface Position {
  x: number;
  y: number;
}

export const Desktop = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const desktopRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const tasks = useTasks();
  const { toggleTask } = useTaskActions();

  return (
    <div
      className={styles.container}
      ref={desktopRef}
      onMouseMove={onMouseMove}
    >
      {tasks.map(({ id, name, iconUrl, open }) => (
        <Fragment key={id}>
          <Icon
            taskId={id}
            onDoubleClick={toggleTask}
            name={name}
            iconUrl={iconUrl}
            containerRef={desktopRef}
            initPosition={{ x: 20, y: 30 }}
            mousePosition={mousePosition}
          />

          {open && (
            <Window
              taskId={id}
              onClose={toggleTask}
              width={400}
              height={400}
              name={name}
              containerRef={desktopRef}
              initPosition={{ x: 20, y: 30 }}
              mousePosition={mousePosition}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
