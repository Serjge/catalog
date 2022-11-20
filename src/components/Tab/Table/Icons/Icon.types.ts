import { Folders } from 'types';

export type IconsProps = {
  isLastFolder?: boolean;
  deleteRow: (id: number) => void;
  id?: number;
  addRow: (parentId: number) => void;
  typeFolder: Folders;
  isEditRow: boolean;
};
