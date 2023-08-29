import { create } from 'zustand';

export interface Position {
  x: number;
  y: number;
}

interface MousePositionStore {
  position: Position;
  actions: {
    changePosition: (position: Position) => void;
  };
}

const useMousePositionStore = create<MousePositionStore>((set) => ({
  position: { x: 0, y: 0 },
  actions: {
    changePosition: (newPosition) => {
      set({ position: { x: newPosition.x, y: newPosition.y } });
    },
  },
}));

export const useMousePosition = () =>
  useMousePositionStore((store) => store.position);
export const useMousePositionActions = () =>
  useMousePositionStore((store) => store.actions);
