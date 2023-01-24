import { create } from 'zustand';
import { defaultTasks } from '../constants';

export interface Task {
  id: number;
  open: boolean;
  name: string;
  iconUrl: string;
}

interface TaskStore {
  tasks: Task[];
  actions: {
    addTask: (task: Task) => void;
    toggleTask: (taskId: number) => void;
  };
}

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: defaultTasks,
  actions: {
    addTask: (newTask) => {
      const tasks = get().tasks;
      tasks.push(newTask);
      set({ tasks });
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
