import { Task } from '../store';

import { Dialog, Chat } from '../views';

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
    content: <Dialog message='Hello world!' taskID={0} />,
  },
  {
    id: 1,
    name: 'Chat',
    iconUrl: '/assets/imgs/apple-outlined.png',
    open: false,
    iconPosition: {
      x: 20,
      y: 120,
    },
    windowSize: {
      width: 400,
      height: 300,
    },
    content: <Chat message='Hello world!' taskID={1} />,
  },
];
