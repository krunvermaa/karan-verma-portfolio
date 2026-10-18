import React, { createContext, useContext, useState } from 'react';

export interface DragItem {
  type: 'project' | 'achievement' | 'milestone' | 'section';
  id: string;
  index: number;
}

interface DragDropContextType {
  dragItem: DragItem | null;
  dragOverTarget: { type: string; id: string; index: number } | null;
  startDrag: (item: DragItem) => void;
  setDragOver: (target: { type: string; id: string; index: number } | null) => void;
  endDrag: () => void;
}

const DragDropContext = createContext<DragDropContextType>({
  dragItem: null,
  dragOverTarget: null,
  startDrag: () => {},
  setDragOver: () => {},
  endDrag: () => {},
});

export const DragDropProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dragItem, setDragItem] = useState<DragItem | null>(null);
  const [dragOverTarget, setDragOverTarget] = useState<{ type: string; id: string; index: number } | null>(null);

  const startDrag = (item: DragItem) => {
    setDragItem(item);
  };

  const setDragOver = (target: { type: string; id: string; index: number } | null) => {
    setDragOverTarget(target);
  };

  const endDrag = () => {
    setDragItem(null);
    setDragOverTarget(null);
  };

  return (
    <DragDropContext.Provider value={{ dragItem, dragOverTarget, startDrag, setDragOver, endDrag }}>
      {children}
    </DragDropContext.Provider>
  );
};

export const useDragDrop = () => useContext(DragDropContext);
