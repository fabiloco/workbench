import { Fragment } from 'react';
import { useMousePosition, useTaskActions, useTasks } from '../../store';

import { Icon } from '../icon/Icon';
import { Window } from '../window/Window';

import styles from './styles/desktop.module.css';

export const Desktop = () => {
  const mousePosition = useMousePosition();

  const tasks = useTasks();
  const { toggleTask } = useTaskActions();

  return (
    <div
      className={styles.container}
    >
      {tasks.map(({ id, name, iconUrl, open }) => (
        <Fragment key={id}>
          <Icon
            taskId={id}
            onDoubleClick={toggleTask}
            name={name}
            iconUrl={iconUrl}
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
              initPosition={{ x: 20, y: 30 }}
              mousePosition={mousePosition}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
