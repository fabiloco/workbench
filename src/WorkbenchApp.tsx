import { useEffect } from 'react';
import { Taskbar, Desktop } from './workbench';

import { useMousePositionActions, useTaskActions } from './workbench/store';

export const WorkbenchApp = () => {
  const { changePosition } = useMousePositionActions();

  const { storeTasks, retriveTasks } = useTaskActions();

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    changePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  // useEffect(() => {
  //   retriveTasks();
  //   document.addEventListener('visibilitychange', (e) => {
  //     if (document.hidden) {
  //       storeTasks();
  //     }
  //   });
  // }, []);

  return (
    <div className='container' onMouseMove={onMouseMove}>
      <Taskbar />
      <Desktop />
    </div>
  );
};
