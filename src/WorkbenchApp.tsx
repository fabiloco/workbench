import { Taskbar, Desktop } from './workbench/components';

import { useMousePositionActions } from './workbench/store';

export const WorkbenchApp = () => {
  const { changePosition } = useMousePositionActions();

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    changePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  return (
    <div className='container' onMouseMove={onMouseMove}>
      <Taskbar />
      <Desktop />
    </div>
  );
};
