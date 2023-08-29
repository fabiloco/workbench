import { ReactNode } from 'react';
import { create } from 'zustand';
import { defaultTasks } from '../constants';
import { Position } from './useMousePositionStore';

export interface Size {
  width: number;
  height: number;
}

export interface Task {
  id: number;
  open: boolean;
  name: string;
  iconUrl: string;
  iconPosition: Position;
  windowSize: Size;
  content: ReactNode;
}

interface TaskStore {
  tasks: Task[];
  actions: {
    addTask: (task: Task) => void;
    toggleTask: (taskId: number) => void;
    storeTasks: () => void;
    retriveTasks: () => void;
    onIconPositionChange: (newPosition: Position, taskId: number) => void;
  };
}

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: defaultTasks,
  // tasks: JSON.parse(localStorage.getItem('tasks') as string)|| defaultTasks,
  actions: {
    addTask: (newTask) => {
      const tasks = get().tasks;
      tasks.push(newTask);
      set({ tasks });
    },
    storeTasks: () => {
      const tasks = get().tasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    retriveTasks: () => {
      const tasks = localStorage.getItem('tasks');

      if (tasks) set({ tasks: JSON.parse(tasks) });
    },
    onIconPositionChange: (newIconPosition, taskId) => {
      const tasks = get().tasks;
      set({
        tasks: tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              iconPosition: newIconPosition,
            };
          } else {
            return task;
          }
        }),
      });
    },
    toggleTask: (taskId: number) => {
      const tasks = get().tasks;
      set({
        tasks: tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              open: !task.open,
            };
          } else {
            return task;
          }
        }),
      });
    },
  },
}));

export const useTasks = () => useTaskStore((store) => store.tasks);
export const useTaskActions = () => useTaskStore((store) => store.actions);
