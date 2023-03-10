import { Fragment } from 'react';
import { useMousePosition, useTaskActions, useTasks } from '../store';

import { Icon } from '../icon/Icon';
import { Window } from '../window/Window';

import styles from './styles/desktop.module.css';

export const Desktop = () => {
  const mousePosition = useMousePosition();

  const tasks = useTasks();
  const { toggleTask } = useTaskActions();

  return (
    <div className={styles.container}>
      {tasks.map(
        ({ id, name, iconUrl, open, iconPosition, windowSize, content }) => (
          <Fragment key={id}>
            <Icon
              taskId={id}
              name={name}
              iconUrl={iconUrl}
              position={iconPosition}
              mousePosition={mousePosition}
            />

            {open && (
              <Window
                taskId={id}
                onClose={toggleTask}
                size={{
                  width: windowSize.width,
                  height: windowSize.height,
                }}
                name={name}
                mousePosition={mousePosition}
              >
                {content}
              </Window>
            )}
          </Fragment>
        )
      )}
    </div>
  );
};
