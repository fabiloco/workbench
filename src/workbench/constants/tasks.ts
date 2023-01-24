import { Task } from '../store';

export const defaultTasks: Task[] = [
  {
    id: 0,
    name: 'Hello world',
    iconUrl: '/assets/imgs/apple-outlined.png', 
    open: false,
    iconPosition: {
      x: 20,
      y: 30,
    },
    windowSize: {
      width: 200,
      height: 100,
    },
  },
];
